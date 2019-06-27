/// <reference path="./lib/SingleEntryPlugin.d.ts" />

import {Output, Plugin} from 'webpack'

declare module 'webpack' {
  namespace compilation{
    interface ChildCompiler extends Compiler {
      runAsChild (cb: (err: any, entries: any, compilation: compilation.Compilation) => void): void
    }
    interface Compilation {
      /**
       * This function allows you to run another instance of webpack inside of webpack however as
       * a child with different settings and configurations (if desired) applied. It copies all hooks, plugins
       * from parent (or top level compiler) and creates a child Compilation
       *
       * @param name name of the child compiler
       * @param outputOptions // Need to convert config schema to types for this
       * @param plugins webpack plugins that will be applied
       * @returns creates a child Compiler instance
       */
      createChildCompiler(name: string, outputOptions: Output, plugins?: Plugin[]): ChildCompiler
    }
  }
}
