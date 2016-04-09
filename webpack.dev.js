var defaults = require('./webpack.defaults')

const cssLoader = {
  test: /\.css$/,
  loader: 'style!css?modules!postcss!'
}

const defaultLoaders = defaults.module.loaders

var devConfig = {
  devtool: 'source-map',
  module: Object.assign({}, defaults.module, {loaders: defaultLoaders.concat(cssLoader)})
}

module.exports = Object.assign({}, defaults, devConfig)