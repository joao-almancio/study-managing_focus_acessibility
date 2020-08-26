const path = require('path');
var webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'src/index.js')],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },

  devServer: {
    compress: true,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  // plugins: [
	// 	new webpack.DllPlugin({
	// 		path: path.join(__dirname, "dist", "[name]-manifest.json"),
  //     name: "[name]_[fullhash]",
	// 	})
	// ]
}
