import {resolve, join} from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLPlugin from 'html-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

const development = process.env.NODE_ENV !== 'production'
const rootPath = resolve(__dirname)
const srcPath = resolve(rootPath, 'src')
const assetsPath = resolve(rootPath, 'assets')

const devPlugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'webpack',
    minChunks: Infinity
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

const prodPlugins = [
  // new BundleAnalyzerPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendors'],
    minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'webpack',
    minChunks: Infinity
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$/,
    threshold: 10240,
    minRatio: 0.8
  })
]

const plugins = [
  new ExtractTextPlugin({filename: 'css/[name].[contenthash].css', disable: development}),
  new webpack.EnvironmentPlugin({NODE_ENV: 'development'}),
  new HTMLPlugin({
    filename: development ? 'index.html' : resolve(rootPath, 'index.html'),
    inject: false,
    template: resolve(srcPath, 'views', 'index.ejs')
  }),
  ...(development ? devPlugins : prodPlugins)
]

export default {
  name: 'client',
  context: srcPath,
  entry: {
    app: './index.js'
  },
  output: {
    path: assetsPath,
    filename: development ? 'js/[name].js' : 'js/[name].[chunkhash].js',
    chunkFilename: development ? 'js/chunks/[name].js' : 'js/chunks/[name].[chunkhash].js',
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
        test: /themes(\\|\/).+\.scss$/,
        use: [
          {loader: 'file-loader', options: {name: development ? 'assets/themes/[name].css' : 'themes/[name].css'}},
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /themes(\\|\/).+\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader', options: {modules: true, constLoaders: 1, localIdentName: '[local]'}},
            {loader: 'sass-loader', options: {includePaths: ['node_modules', 'node_modules/@material/*'].map((d) => join(__dirname, d))}}
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins,
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    disableHostCheck: true,
    compress: false,
    port: 3000,
    stats: { colors: true },
    inline: true,
    host: '0.0.0.0',
    historyApiFallback: true
  }
}
