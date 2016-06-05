const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './admin/script/App.jsx',
  ],
  output: {
    path: path.join(__dirname, '/public/admin/js'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8000/'
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
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, '/admin/script')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          'css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
