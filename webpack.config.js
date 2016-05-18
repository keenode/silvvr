const path = require('path')

module.exports = {
  context: __dirname,
  entry: './admin/script/Dashboard.jsx',
  output: {
    path: path.join(__dirname, '/public/admin/js'),
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
        include: path.join(__dirname, '/admin/script')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
