declare module 'prerender-spa-plugin' {
  import {Plugin} from 'webpack'
  export interface Options {
    staticDir?: string,
    outputDir?: string,
    indexPath?: string
    routes?: string[],
    server?: object,
    minify?: object,
    renderer: object
  }
  export default class PreRenderSPAPlugin extends Plugin {
    constructor (options?: Options)
  }
  export class PuppeteerRenderer {
    constructor (options?: object)
  }
}
