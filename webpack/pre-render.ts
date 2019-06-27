import {compilation, compiler, Configuration} from 'webpack'
import {Options as HTMLWebpackPluginOptions, TemplateParametersAssets} from 'html-webpack-plugin'


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

export default ({
  htmlWebpackPlugin: {files, options: {chunk = 'main'}},
  compilation,
}: Options) => {
  const asset = files.chunks[chunk]
  if (!asset) {
    throw new Error(`This template has found no assets under the chunk name ${chunk}`)
  }
  return /* html */`
    <!DOCTYPE html>
    <html>
      <head>
        <script>
          const assets = ${JSON.stringify(files)}
          if (document.currentScript) {
            document.head.removeChild(document.currentScript)
            window.addEventListener('DOMContentLoaded', () => {
              window.dispatchEvent(new RenderEvent(eventType, assets))
            })
          }
          const eventType = 'webpack-render'
          class RenderEvent extends Event {
            constructor (type, assets, eventInitDict) {
              super(type, eventInitDict)
              this.assets = assets
            }
          }
        </script>
      </head>
      <body>
        <script src="${files.chunks['main'].entry}"></script>
      </body>
    </html>
  `
}


export interface RenderEvent extends Event {
  readonly assets: Assets
}

export const renderEventType = 'webpack-render' as const



export type RenderCallback = (
  assets: Assets
) => Element


export function renderPage(
  callback: RenderCallback
) {
  window.addEventListener(renderEventType, ({assets: chunks}) => {
    const element = callback(chunks)
    for (const {name, value} of Array.from(element.attributes)) {
      document.documentElement.setAttribute(name, value)
    }
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


declare module 'html-webpack-plugin' {
  interface Options {
    chunk?: string
  }
}

declare global {
  interface Window {
    addEventListener<Names extends string = string>(
      type: typeof renderEventType,
      listener: (this: Window, ev: RenderEvent) => void,
      options?: boolean | AddEventListenerOptions
    ): void
    removeEventListener(
      type: typeof renderEventType,
      listener: (this: Window, ev: RenderEvent) => void,
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
