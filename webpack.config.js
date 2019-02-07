const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  watch: true,
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
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Webpack starter project',
      template: path.resolve('./src/index.html')
    }),
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
          'style-loader',
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
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: './images',
              name: "[name].[ext]",
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: false,
                quality: 10
              }
            }
          },
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
    ]
  }
};