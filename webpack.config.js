const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  watch: false,
  watchOptions: {
    aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
    poll: 1000, // Check for changes every second,
    ignored: /node_modules/,
    // ignored: [
    //   '**/*.scss', '/node_modules/'
    // ]
  },
  devtool: 'source-maps',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // On Production
          /*MiniCssExtractPlugin.loader,*/
          // On development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};