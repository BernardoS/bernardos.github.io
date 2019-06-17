/// <reference path="../@types/webpack/index.d.ts" />
import { Compiler, Plugin } from 'webpack'
import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin'
import {RawSource, Source} from 'webpack-sources'
import createProxiedChunks, {ChunksByEntry} from './ProxiedChunks'
import vm from 'vm'

export interface Options<Key extends string> {
  globals?: object
  entry: Key
  output: string
  plugins?: Plugin[]
}

export {ChunksByEntry} from './ProxiedChunks'

export type RenderFunction = <Entries extends string>(
  chunksByEntry: ChunksByEntry<Entries>
) => string


const PLUGIN_NAME = 'template-webpack-plugin'
const CHILD_NAME = 'template-webpack-child-compiler'

export default class TemplateWebpackPlugin<Key extends string> implements Plugin  {
  public readonly options: Required<Options<Key>>
  private _vmContext: vm.Context
  constructor (options: Options<Key>) {
    this.options = {
      plugins: [],
      globals: {},
      ...options
    }
    this._vmContext = vm.createContext({
      require,
      ...global,
      ...this.options.globals
    })
  }
  public apply (compiler: Compiler) {
    const {entry, output, plugins} = this.options
    compiler.hooks.make.tapAsync(PLUGIN_NAME, (compilation, cb: (err?: any) => void) => {
      const childCompiler = compilation.createChildCompiler(CHILD_NAME, {
        filename: output
      }, [
        new SingleEntryPlugin(compilation.context, entry, output),
        ...plugins
      ])
      childCompiler.runAsChild(cb)
    })
    compiler.hooks.emit.tap(PLUGIN_NAME, compilation => {
      try {
        const source: Source = compilation.assets[output]
        compilation.assets[output] = new RawSource(this._runScript(
          source,
          createProxiedChunks<typeof entry>(compilation)
        ))
      } catch (error) {
        compilation.errors.push(error)
      }
    })
  }
  
  private _runScript (source: Source, ...params: Parameters<RenderFunction>) {
    const vmScript = new vm.Script(source.source(), {
      filename: `vm-${PLUGIN_NAME}-${this.options.entry}`
    })
    const renderFunction = normalizeESModule(vmScript.runInContext(this._vmContext))
    if (typeof renderFunction !== 'function') {
      throw new TypeError(`Entry ${this.options.entry} should return a function, instead got a ${typeof renderFunction}`)
    }
    return renderFunction(...params)
  }
}

const normalizeESModule = (module: RenderFunction | {default: RenderFunction}) => {
  if ('default' in module) return module.default
  return module
}
