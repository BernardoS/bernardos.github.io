import './src/utils/polyfills'
import webpack, { Plugin } from 'webpack'
import path from 'path'
import MiniCssExtractWebpackPlugin from 'mini-css-extract-plugin'
import OptimizeCssAssets from 'optimize-css-assets-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
// import PreRenderSPAPlugin, {PuppeteerRenderer} from 'prerender-spa-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import CSSOWebpackPlugin from 'csso-webpack-plugin'
import OfflinePlugin from 'offline-plugin'
import RobotsTXTWebpackPlugin from 'robotstxt-webpack-plugin'
import WebpackPwaManifestPlugin from 'webpack-pwa-manifest'
import manifesOptions from './src/manifest'

const ROOT_PATH = __dirname
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'www')
const SRC_PATH = path.resolve(ROOT_PATH, 'src')



const configuration = (env: { production?: boolean, analyze?: boolean } = {}): webpack.Configuration => {
  return ({
    mode: env.production ? 'production' : 'development',
    context: SRC_PATH,
    entry: {
      main: './index.ts',
      // ['web-components']: './web-components/port-details.ts'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '~': SRC_PATH,
        '@': SRC_PATH,
      }
    },
    output: {
      path: OUTPUT_PATH,
      filename: env.production ? 'js/[chunkhash:5].js' : 'js/[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.s?css$/,
          oneOf: [
            {
              include: /\/(web-components|fonts)\//,
              use: [
                'css-string-loader',
                'css-modules-typescript-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: env.production
                      ? '[hash:base64:5]'
                      : '[local]--[hash:base64:5]',
                    camelCase: 'only',
                  }
                },
                'sass-loader'
              ]
            },
            {
              exclude: /\/(web-components|fonts)\//,
              use: [
                env.production ? MiniCssExtractWebpackPlugin.loader : 'style-loader',
                'css-modules-typescript-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: env.production
                      ? '[hash:base64:5]'
                      : '[local]--[hash:base64:5]',
                    camelCase: 'only',
                    sourceMap: true
                  }
                },
                'css-variables-to-json-loader',
                'resolve-url-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            }
          ],
        },
        {
          test: /\.svg$/,
          use: 'svg-inline-loader'
        },
        {
          test: /\.md$/,
          use: 'raw-loader'
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: `fonts/[${env.production ? 'hash:5' : 'name'}].[ext]` 
            }
          }
        },
        {
          test: /\.(jpe?g|png|pdf|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `images/[${env.production ? 'hash:5' : 'name'}].[ext]`
              }
            }
          ]
        },
      ]
    },
    resolveLoader: {
      alias: {
        'css-string-loader': path.resolve(ROOT_PATH, 'webpack/css-string-loader.ts'),
        'css-variables-to-json-loader': path.resolve(ROOT_PATH, 'webpack/css-variables-to-json-loader.ts'),
        'dom-svg-loader': path.resolve(ROOT_PATH, 'webpack/svg-loader.ts'),
      }
    },
    plugins: [
      new MiniCssExtractWebpackPlugin({
        filename: `styles/[${env.production ? 'contenthash:5' : 'name'}].css`,
        chunkFilename: `styles/[${env.production ? 'contenthash:5' : 'id'}].css`
      }),
      new HTMLWebpackPlugin({
        inject: false,
        template: './template.ts',
        minify: env.production ? {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
          removeComments: false
        } : false,
        chunksSortMode: 'none'
      }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.production
        ? 'production'
        : 'development'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: env.analyze ? 'static' : 'disabled',
        analyzerPort: 3000,
        // generateStatsFile: true
      }),
      ...env.production
      ? [
        // new HTMLInlineCSSWebpackPlugin(),
        new CSSOWebpackPlugin() as unknown as Plugin,
        // new PreRenderSPAPlugin({
        //   staticDir: OUTPUT_PATH,
        //   routes: [ '/' , '/experience', '/education'],
        //   server: {port: 3001},
        //   minify: {
        //     collapseBooleanAttributes: true,
        //     collapseWhitespace: true,
        //     decodeEntities: true,
        //     keepClosingSlash: true,
        //     sortAttributes: true,
        //     removeComments: false
        //   },
        //   renderer: new PuppeteerRenderer({
        //     injectProperty: '__PRERENDER_INJECTED',
        //     inject: true,
        //   })
        // }),
        new CleanWebpackPlugin(),
        new CompressionPlugin({
          algorithm: 'gzip',
          filename: '[path].gz[query]',
          minRatio: 0.8,
          test: /\.js$/,
          threshold: 10240
        }),
        new OfflinePlugin(),
        new WebpackPwaManifestPlugin(manifesOptions),
        new RobotsTXTWebpackPlugin({
          policy: [
            {
              userAgent: "Googlebot",
              allow: "/",
              disallow: "/search",
              crawlDelay: 2
            },
            {
              userAgent: "*",
              allow: "/",
              crawlDelay: 10,
            }
          ],
          host: "https://bernardo.sunderhus.nom.br"
        })
      ]
      : []
    ],
    optimization: {
      noEmitOnErrors: true,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          ['web-components']: {
            test: /[\\/]web-components[\\/]/,
            chunks: 'all',
          },
          commons: {
            chunks: 'initial',
            minChunks: 2,
            name: 'commons'
          }
        }
      },
      minimizer: env.production ? [
        new TerserWebpackPlugin({
          cache: false,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false,
            },
          }
        }),
        new OptimizeCssAssets()
      ] : []
    },
    target: 'web',
    stats: env.production ? 'normal' : 'errors-only',
    devtool: env.production ? 'source-map' : 'source-map',
    devServer: {
      contentBase: path.resolve('./src'),
      host: '0.0.0.0',
      disableHostCheck: true,
      compress: false,
      historyApiFallback: true,
      inline: true,
      hot: false,
      https: false,
      port: 3000,
      stats: 'normal'
    }
  })
}

export default configuration
