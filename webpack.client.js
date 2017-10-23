const DynamicCdn = require('dynamic-cdn-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  entry: {
    bundle: './src/client'
  },

  devtool: process.env.NODE_ENV !== 'production' ? 'cheap-module-source-map' : false,

  output: {
    path: `${__dirname}/public`,
    filename: 'js/[name].js'
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
            ['env', { browsers: 'last 2 versions', useBuiltIns: true }]
          ],
          plugins: [
            ['transform-object-rest-spread', { useBuiltIns: true }],
            'transform-runtime'
          ]
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['public/js']),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new ManifestPlugin(),
    new DynamicCdn()
  ]
}
