const paths = require('./paths');

const webpack = require('webpack')
const { merge } = require('webpack-merge')

module.exports = [
  'source-map'
].map(devtool => ({
  mode: 'development',
  entry: './index.js',
  output: {
    path: paths.dist,
    filename: 'create-user.js',
    library: 'createUser',
    libraryTarget: 'umd',
  },
  
  devtool,
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
    ],
  },
  optimization: {
    runtimeChunk: false
  }
}));