const DynamicCdn = require('dynamic-cdn-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')
const { DefinePlugin } = require('webpack')

process.env.NODE_ENV = 'production'

const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      'react',
      'stage-0'
    ]
  }
}

const sharedConfig = {}

const clientConfig = {
  ...sharedConfig,

  entry: {
    bundle: './src/client'
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: `${__dirname}/public`,
    hashDigestLength: 8,
    filename: 'js/[name].[hash].js'
  },

  module: {
    rules: [
      {
        ...babelLoader,
        options: {
          presets: [
            ...babelLoader.options.presets,
            ['env', { browsers: 'last 2 versions' }]
          ]
        }
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ManifestPlugin(),
    new DynamicCdn()
  ]
}

const serverConfig = {
  ...sharedConfig,

  target: 'node',

  entry: './src',

  output: {
    path: `${__dirname}/server`,
    hashDigestLength: 8,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      {
        ...babelLoader,
        options: {
          presets: [
            ...babelLoader.options.presets,
            ['env', { node: 'current' }]
          ]
        }
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new ManifestPlugin({
      filename: 'server-manifest.js'
    })
  ]
}

module.exports = [serverConfig, clientConfig]
