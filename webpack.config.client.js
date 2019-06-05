const DynamicCdn = require('dynamic-cdn-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  entry: {
    bundle: './src/client'
  },

  mode: 'development',

  devtool:
    process.env.NODE_ENV !== 'production' ? 'cheap-module-source-map' : false,

  output: {
    path: `${__dirname}/public`,
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new ManifestPlugin(),
    new DynamicCdn()
  ]
}
