import {compilation, compiler, Configuration} from 'webpack'
import {Options as HTMLWebpackPluginOptions, TemplateParametersAssets} from 'html-webpack-plugin'
import html from '~/utils/html'
import variables from '~/views/app/style.json'

import ico from './images/favicon.ico'
import ico16x16 from './images/favicon-16x16.png'
import ico32x32 from './images/favicon-32x32.png'
import ico180x180 from './images/apple-touch-icon.png'
import avatarURL from './images/avatar.jpeg'
import strvURL from './images/STRV.png'
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

export default ({htmlWebpackPlugin: {files}}: Options) => {
  const {
    chunks: {
      runtime,
      commons,
      'web-components': webComponents,
      main
    },
    css
  } = files
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Bernardo Sunderhus</title>
        <meta name="Description" content="Bernardo Sunderhus personal website">
        <meta property="og:title" content="Bernardo Sunderhus">
        <meta property="og:description" content="Front-end Web Engineer">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="msapplication-TileColor" content=${variables.darkBlue}>
        <meta name="theme-color" content=${variables.darkBlue}>
        <meta name="mobile-web-app-capable" content="yes">
        <link as="script" rel="preload" href=${runtime.entry}>
        ${commons && html`<link as="script" rel="preload" href=${commons.entry}>`}
        <link as="script" rel="preload" href=${webComponents.entry}>
        <link as="script" rel="preload" href=${main.entry}>
        <link as="image" rel="preload" href=${avatarURL}>
        <link as="image" rel="preload" href=${strvURL}>
        ${css.map(css => html`<link as="style" rel="preload" href=${css}>`)}
        <link rel="icon" href=${ico} type="image/png" sizes="48x48">
        <link rel="icon" href=${ico16x16} type="image/png" sizes="16x16">
        <link rel="icon" href=${ico32x32} type="image/png" sizes="32x32">
        <link rel="apple-touch-icon" href=${ico180x180} type="image/png" sizes="180x180">
        ${fonts}
        <script src=${runtime.entry}></script>
        ${commons && html`<script src=${commons.entry}></script>`}
        <script src=${webComponents.entry}></script>
        <script defer src=${main.entry}></script>
        ${main.css.map(css => html`<link rel="stylesheet" href=${css}>`)}
      </head>
      <body></body>
    </html>
  `
}
