const path = require('path')
const MiniCssExtract = require('mini-css-extract-plugin')
const OptimizeCssAssets = require('optimize-css-assets-webpack-plugin')
const Html = require('html-webpack-plugin')

module.exports = (env) => {
  if (!env) env = {}
  return {
    mode: env.production ? 'production' : 'development',
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: env.production ? '[name].[chunkhash].js' : '[name].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(css|sass|scss)$/,
          exclude: /node_modules/,
          use: [
            env.production ? MiniCssExtract.loader : 'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules']
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new OptimizeCssAssets({}),
      new Html({
        template: './src/views/index.ejs',
        hash: Boolean(env.production)
      })
    ],
    optimization: {
      minimizer: [
        new OptimizeCssAssets({})
      ]
    },
    devtool: 'inline-source-map',
    target: 'web',
    stats: 'errors-only',
    devServer: {
      port: 3000,
      contentBase: './assets',
      compress: false,
      historyApiFallback: true
    }
  }
}
