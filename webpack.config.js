const path = require('path')

module.exports = {
  context: __dirname,
  entry: './app/js/BrowserEntry.jsx',
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/app/js')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
