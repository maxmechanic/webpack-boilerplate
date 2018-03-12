var webpack = require('webpack')
var defaults = require('./webpack.defaults')

var prodConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}

module.exports = Object.assign({}, defaults, prodConfig)
