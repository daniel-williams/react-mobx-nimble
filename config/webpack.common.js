const helpers = require('./helpers');
const webpack = require('webpack');

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = function (options) {
  let ENV = JSON.stringify(options.env);

  return {
    entry: {
      'app': './src/app',
      'polyfills': './src/polyfills.tsx',
      'vendor': './src/vendor.tsx',
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      loaders: [
      ]
    },
    plugins: [
      new DefinePlugin({
        'ENV': ENV,
        'process.env.ENV': ENV,
        'process.env.NODE_ENV': ENV,
      }),
      new CommonsChunkPlugin({
        names: ['app', 'vendor', 'polyfills'],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        favicon: 'client/assets/images/favicon.png',
        showErrors: true
      }),
    ],
  };
};
