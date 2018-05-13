const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: ['./src/client/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                minimize: process.env.NODE_ENV === 'production',
              },
            },
            'postcss-loader',
          ],
        }),
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: process.env.NODE_ENV !== 'production',
    }),
    new HtmlWebpackPlugin({ template: './index_template.html', hash: true }),
  ],
}
