declare module 'webpack/lib/SingleEntryPlugin' {
  import {Plugin} from 'webpack'
  class SingleEntryPlugin extends Plugin {
    constructor (context: string, request: string, chunkName?: string)
  }
  export default SingleEntryPlugin
}
