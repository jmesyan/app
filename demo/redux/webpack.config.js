var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [ 'react', 'react-dom' ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  plugins: [
  	 new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: './favicon.ico'
    })
  ]
};