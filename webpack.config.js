const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: path.resolve(__dirname, './src/default_test.html')
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, './public/javascripts')]),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],

  entry: {
    app: path.resolve(__dirname, './src/javascripts/app.js'),
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'javascripts/[name].[chunkhash].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
};