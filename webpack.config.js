const path = require('path')
const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const Html = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const SimpleProgressPlugin = require('simple-progress-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const components = fs.readdirSync(path.resolve(__dirname, 'src', 'components'))
  .reduce((obj, folder) => ({...obj, [folder]: `./components/${folder}/index.js`}), {})

module.exports = (env = {}) => {
  return {
    mode: env.production ? 'production' : 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
      ...components
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        DOM: path.resolve(__dirname, './src/utils/DOM.js')
      }
    },
    output: {
      path: path.resolve(__dirname, 'www'),
      filename: env.production ? 'js/[chunkhash].js' : 'js/[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: 'pug-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s?css$/,
          exclude: path.resolve(__dirname, './src/components'),
          use: [
            env.production ? MiniCssExtractWebpackPlugin.loader : 'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules']
              }
            }
          ]
        },
        {
          test: /\.s?css$/,
          include: path.resolve(__dirname, './src/components'),
          use: [
            // {
            //   loader: 'file-loader',
            //   options: {
            //     name: `styles/[${env.production ? 'hash' : 'name'}].css`
            //   }
            // },
            // 'extract-loader',
            {
              loader: 'css-loader',
              options: {
                minimize: Boolean(env.production),
                sourceMap: !env.production,
                modules: true,
                camelCase: true
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|svg|pdf)$/,
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
      ...plugins.commons,
      ...(
        env.analyze
        ? [new BundleAnalyzerPlugin()]
        : []
      ),
      ...(
        env.production
        ? plugins.production
        : plugins.development
      )
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        name: true,
        // automaticNameDelimiter: '_'
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
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve('./src'),
      host: '0.0.0.0',
      disableHostCheck: true,
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
  commons: [
    new OptimizeCssAssets({}),
    new Html({
      template: './index.pug',
      inject: false
    })
  ],
  production: [
    CopyWebpackPlugin([
      'favicon.ico'
    ]),
    new MiniCssExtractWebpackPlugin({
      filename: 'styles/[hash].css',
      chunkFilename: 'styles/[hash].css'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    SimpleProgressPlugin({format: 'compact'}),
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
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractWebpackPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css'
    }),
    new webpack.EnvironmentPlugin({NODE_ENV: 'development'}),
    SimpleProgressPlugin({format: 'minimal'}),
  ]
}
