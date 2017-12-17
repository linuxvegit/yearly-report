'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  plugins: [new webpack.optimize.ModuleConcatenationPlugin(), new webpack.LoaderOptionsPlugin({
    minimize: true
  })],
  entry: {
    main: path.resolve(__dirname, './src/javascripts/app.js')
  },
  output: {
    path: path.resolve(__dirname, './public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      include: path.resolve(__dirname, './src'),
      use: {
        loader: "babel-loader"
      }
    }]
  }
};
//# sourceMappingURL=webpack.config.js.map