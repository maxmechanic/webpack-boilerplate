const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const defaults = require('./webpack.defaults')
const defaultLoaders = defaults.module.loaders

const cssLoader = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css?modules!postcss!')
}

const prodConfig = {
  output: Object.assign({}, defaults.output, {filename: '[name]-[hash].js'}),
  module: Object.assign({}, defaults.module, {loaders: defaultLoaders.concat(cssLoader)}),
  plugins: defaults.plugins.concat([
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
     }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
     }
    })
  ])
}

module.exports = Object.assign({}, defaults, prodConfig)
