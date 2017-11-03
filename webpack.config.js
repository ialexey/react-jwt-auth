var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  })],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    watchOptions: {
      ignored: /node_modules/
    }
  }
}