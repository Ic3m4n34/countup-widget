const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const libraryName = 'CountUpWidget';
const outputFile = `${libraryName}.min.js`;


module.exports = {
  entry: './src/index.js',
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }, ],
      },
    ],
  },
  plugins: [
    new uglifyJsPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};