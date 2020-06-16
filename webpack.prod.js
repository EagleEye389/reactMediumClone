const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    optimization: {
      minimizer: [new UglifyJsPlugin()],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
            name: "vendor", ///< name of bundle
            chunks: "all" ///< type of code to put in this bundle
          }
        },
     },
  
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js(\?.*)?$/i,
      }),
    ]
   });
