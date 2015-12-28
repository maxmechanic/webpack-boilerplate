var path = require('path')
var autoprefixer = require('autoprefixer')
var cssnext = require('cssnext')

module.exports = {
  entry: [
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  postcss: [cssnext, autoprefixer]
}