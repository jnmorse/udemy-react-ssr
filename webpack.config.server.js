const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  entry: './src',

  mode: 'development',

  output: {
    path: `${__dirname}/server`,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
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
  externals: [nodeExternals()]
};
