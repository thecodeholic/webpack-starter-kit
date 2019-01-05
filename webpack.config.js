const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  devtool: 'source-maps',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}