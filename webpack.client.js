const DynamicCdn = require('dynamic-cdn-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack')

process.env.NODE_ENV = 'production'

module.exports = {
  entry: {
    bundle: './src/client'
  },

  devtool: 'source-map',

  output: {
    path: `${__dirname}/public`,
    hashDigestLength: 8,
    filename: 'js/[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { browsers: 'last 2 versions' }]
          ]
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['public']),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ManifestPlugin(),
    new DynamicCdn()
  ]
}
