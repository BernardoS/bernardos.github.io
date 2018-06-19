const path = require('path')
const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const Html = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const SimpleProgressPlugin = require('simple-progress-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env = {}) => {
  return {
    mode: env.production ? 'production' : 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
      components: './components/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'www'),
      filename: env.production ? 'js/[name].[chunkhash].js' : 'js/[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        // {
        //   test: /\.html$/,
        //   use: {
        //     loader: 'html-loader',
        //     options: {
        //       removeComments: true,
        //       collapseWhitespace: true,
        //       minimize: false,
        //       interpolate: true,
        //       attrs: ['img:src', 'my-hero:src', 'mark-down:src']
        //     }
        //   }
        // },
        {
          test: /\.pug$/,
          use: 'pug-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s?css$/,
          exclude: path.resolve(__dirname, './src/components'),
          use: [
            env.production ? MiniCssExtractWebpackPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.s?css$/,
          include: path.resolve(__dirname, './src/components'),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `styles/[${env.production ? 'hash' : 'name'}].css`
              }
            },
            'extract-loader',
            {
              loader: 'css-loader',
              options: {
                minimize: Boolean(env.production),
                sourceMap: !env.production
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `images/[${env.production ? 'hash' : 'name'}].[ext]`
              }
            }
          ]
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `docs/[${env.production ? 'hash' : 'name'}].[ext]`
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new OptimizeCssAssets({}),
      new MiniCssExtractWebpackPlugin({
        filename: env.production ? 'styles/[name].[hash].css' : 'styles/[name].css',
        chunkFilename: env.production ? 'styles/[id].[hash].css' : 'styles/[id].[hash].css'
      }),
      new Html({
        template: './index.pug',
        inject: false
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.production ? 'production' : 'development'
      }),
      new SimpleProgressPlugin({
        format: env.production ? 'compact' : 'minimal'
      }),
    ]
    .concat(env.analyze ? [new BundleAnalyzerPlugin()] : [])
    .concat(env.production ? plugins.production : plugins.development),
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: true,
        automaticNameDelimiter: '_'
      },
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
    new CleanWebpackPlugin('./www'),
    // new CopyWebpackPlugin(
    //   ['./assets'], {ignore: ['*.ejs', '*.psd', '*.studio', '_*']}
    // ),
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
