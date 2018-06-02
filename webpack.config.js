const path = require('path')
// const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const Html = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const SimpleProgressPlugin = require('simple-progress-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = (env = {}) => {
  return {
    mode: env.production ? 'production' : 'development',
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'www'),
      filename: env.production ? 'js/[name].[chunkhash].js' : 'js/[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `styles/[${env.production ? 'hash' : 'name'}].css`
              }
            },
            'extract-loader',
            // MiniCssExtractWebpackPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: env.production,
                sourceMap: !env.production,
                modules: true,
                localIdentName: '[name]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new OptimizeCssAssets({}),
      // new MiniCssExtractWebpackPlugin({
      //   filename: '[name].css',
      //   chunkFilename: '[id].css'
      // }),
      new Html({template: './assets/index.ejs'}),
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.production ? 'production' : 'development'
      }),
      new SimpleProgressPlugin({
        format: env.production ? 'compact' : 'minimal'
      }),
      ...(env.production ? plugins.production : plugins.development)
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        }),
        new OptimizeCssAssets({})
      ]
    },
    target: 'web',
    stats: env.production ? 'normal' : 'errors-only',
    devServer: {
      compress: false,
      contentBase: './assets',
      historyApiFallback: true,
      inline: true,
      https: false,
      port: 3000,
      stats: 'minimal'
    }
  }
}

const plugins = {
  production: [
    new CleanWebpackPlugin('./dist'),
    new CopyWebpackPlugin(['./assets'], {ignore: ['*.ejs', '*.psd']}),
    new CompressionPlugin({
      algorithm: 'gzip',
      asset: '[path].gz[query]',
      minRatio: 0.8,
      test: /\.js$/,
      threshold: 10240
    })
  ],
  development: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
