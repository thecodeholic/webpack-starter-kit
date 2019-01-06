const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
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
}