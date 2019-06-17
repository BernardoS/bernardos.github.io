import {compilation, compiler, Configuration} from 'webpack'
import {Options as HTMLWebpackPluginOptions, TemplateParametersAssets} from 'html-webpack-plugin'
import createProxiedChunks from './ProxiedChunks'


interface Options {
  compilation: compilation.Compilation
  webpack: compiler.Compiler
  webpackConfig: Configuration
  htmlWebpackPlugin: {
    files: TemplateParametersAssets,
    options: HTMLWebpackPluginOptions & {
      entry: string
    }
  }
}

export default ({htmlWebpackPlugin: {files, options}, compilation}: Options) => {
  const chunks = createProxiedChunks(compilation)
  const entries = chunks[options.entry].js
  return `
    <html>
      <head>
        <script>
          const chunks = ${JSON.stringify({
            ...Object.entries(chunks).reduce((acc, [key, value]) => ({
              ...acc,
              [key]: {js: value.js, css: value.css}
            }), {})
          })}
          if (document.currentScript) {
            document.head.removeChild(document.currentScript)
            window.addEventListener('DOMContentLoaded', () => {
              window.dispatchEvent(new RenderEvent(RenderEvent.eventType, chunks))
            })
          }
          class RenderEvent extends Event {
            static eventType = 'webpack-render'
            constructor (type, chunks, eventInitDict) {
              super(type, eventInitDict)
              this.chunks = chunks
            }
          }
        </script>
      </head>
      <body>
        ${entries.map(entry => `<script src="${entry}"></script>`)}
      </body>
    </html>
  `
}

export type WebpackChunks<Names extends string> = {
  [str in Names]: {js: string[], css: string[]}
}

export interface RenderEvent<Names extends string> extends Event {
  readonly chunks: WebpackChunks<Names>
}

export const renderEventType = 'webpack-render' as const

declare global {
  interface Window {
    addEventListener<Names extends string = string>(
      type: typeof renderEventType,
      listener: (this: Window, ev: RenderEvent<Names>) => void,
      options?: boolean | AddEventListenerOptions
    ): void
    removeEventListener(
      type: typeof renderEventType,
      listener: (this: Window, ev: RenderEvent<string>) => void,
      options?: boolean | EventListenerOptions
    ): void
  }
  interface HTMLCollection extends HTMLCollectionBase {
    [Symbol.iterator] (): Iterator<Element>
}
  interface HTMLCollectionOf<T extends Element> extends HTMLCollectionBase {
    [Symbol.iterator] (): Iterator<T>
  }
}


export type RenderCallback<ChunkNames extends string> = (
  chunks: WebpackChunks<ChunkNames>
) => HTMLElement


export function renderPage<ChunkNames extends string>(
  callback: RenderCallback<ChunkNames>
) {
  window.addEventListener<ChunkNames>(renderEventType, ({chunks}) => {
    const element = callback(chunks)
    const [head, body] = element.children
    if (head && head instanceof HTMLHeadElement) {
      const doc = new DocumentFragment()
      while (head.children.length) doc.append(head.firstChild!)
      document.head.append(doc)
    }
    if (body && body instanceof HTMLBodyElement) {
      document.body = body.cloneNode(true) as HTMLBodyElement
    }
  }, {once: true})
}
