declare module 'prerender-spa-plugin' {
  import {Plugin} from 'webpack'
  export interface Options {
    staticDir?: string,
    routes?: string[],
    server?: object,
    minify?: object
  }
  export default class PreRenderSPAPlugin extends Plugin {
    constructor (options?: Options)
  }
}
