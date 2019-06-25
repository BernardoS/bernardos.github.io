import {compilation, compiler, Configuration} from 'webpack'
import {Options as HTMLWebpackPluginOptions, TemplateParametersAssets} from 'html-webpack-plugin'
import html from '~/utils/html'
import variables from '~/views/app/style.json'

import ico from './images/favicon.ico'
import ico16x16 from './images/favicon-16x16.png'
import ico32x32 from './images/favicon-32x32.png'
import ico180x180 from './images/apple-touch-icon.png'
import avatarPNG from '~/images/avatar.png'
import STRVPNG from '~/images/STRV.png'
import fonts from './fonts'

export interface Assets extends TemplateParametersAssets {
  chunks: {
    [chunkName: string]: {
      size: number
      entry: string
      hash: string,
      css: string[]
    }
  }
}

interface Options {
  compilation: compilation.Compilation
  webpack: compiler.Compiler
  webpackConfig: Configuration
  htmlWebpackPlugin: {
    files: Assets,
    options: HTMLWebpackPluginOptions
  }
}

export default ({htmlWebpackPlugin: {files}}: Options) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Bernardo Sunderhus</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="msapplication-TileColor" content=${variables.darkBlue}>
      <meta name="theme-color" content=${variables.darkBlue}>
      <meta name="mobile-web-app-capable" content="yes">
      <link rel="icon" href=${ico} type="image/png" sizes="48x48">
      <link rel="icon" href=${ico16x16} type="image/png" sizes="16x16">
      <link rel="icon" href=${ico32x32} type="image/png" sizes="32x32">
      <link rel="apple-touch-icon" href=${ico180x180} type="image/png" sizes="180x180">
      ${files.js.map(file => html`
        <link as="script" rel="preload" href=${file}>
      `)}
      <link as="image" rel="preload" href=${avatarPNG}>
      <link as="image" rel="preload" href=${STRVPNG}>
      ${fonts}
      ${files.js.map(file => html`
        <script defer src=${file}></script>
      `)}
    </head>
    <body></body>
  </html>
`
