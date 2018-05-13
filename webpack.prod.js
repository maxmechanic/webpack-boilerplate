const webpack = require('webpack')
const merge = require('webpack-merge')

const defaults = require('./webpack.defaults')

const prodConfig = merge(defaults, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
})

module.exports = prodConfig
