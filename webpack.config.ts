import webpack from 'webpack'
import path from 'path'
import MiniCssExtractWebpackPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssets from 'optimize-css-assets-webpack-plugin'
import Html from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import SimpleProgressPlugin from 'simple-progress-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'


interface EnvVars {
  production?: boolean
  analyze?: boolean
}

const configuration = (env: EnvVars = {}): webpack.Configuration => ({
  mode: env.production ? 'production' : 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.tsx',
    components: './components/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      DOM: path.resolve(__dirname, './src/utils/DOM/index.ts')
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
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, './src/components'),
        use: [
          env.production ? MiniCssExtractWebpackPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/components'),
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: Boolean(env.production),
              sourceMap: !env.production,
              modules: true,
              camelCase: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `images/[${env.production ? 'hash' : 'name'}].[ext]`
            }
          }
        ]
      },
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
      new OptimizeCssAssets()
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
})

const plugins = {
  commons: [
    new OptimizeCssAssets({}),
    new Html({
      template: './index.pug',
      inject: false
    })
  ],
  production: [
    new MiniCssExtractWebpackPlugin({
      filename: 'styles/[hash].css',
      chunkFilename: 'styles/[hash].css'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    SimpleProgressPlugin({format: 'compact'}),
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      filename: '[path].gz[query]',
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


export default configuration
