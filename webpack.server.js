const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',

  entry: './src',

  output: {
    path: `${__dirname}/server`,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
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
            ['env', {
              useBuiltIns: true,
              node: '8.7.0'
            }]
          ],
          plugins: [
            ['transform-object-rest-spread', { useBuiltIns: true }],
            'transform-runtime'
          ]
        }
      }
    ]
  },
  externals: [nodeExternals()]
}
