const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // serve: {},
  module: {
    rules: [
      {
        test: /\.css?$/,
        // use:['style-loader','css-loader']
        use: [
          {
            loader: MiniCssExtractPlugin.loader,

          },
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      // fileName: './src/index.html',
      // inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*']
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
  })
  ],
  
};