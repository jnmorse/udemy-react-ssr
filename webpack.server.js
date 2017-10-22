const ManifestPlugin = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-0',
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
