const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'none',
  mode: 'production',
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
})