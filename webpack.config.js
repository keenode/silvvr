const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/js/App.jsx',
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets:['react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
