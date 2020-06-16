const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-cheap-source-map',
  mode: 'development',
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
  },
})