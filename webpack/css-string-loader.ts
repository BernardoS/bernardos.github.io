import { stringifyRequest } from 'loader-utils';
import { loader } from 'webpack'

export default function (this: loader.LoaderContext, source: string) {}
export function pitch(this: loader.LoaderContext, remainingRequest: string) {
  if (this.cacheable) this.cacheable()
  return `
    import result from ${stringifyRequest(this, "!!" + remainingRequest)}
    export default {
      ...result.locals,
      toString: result.toString.bind(result)
    }
  `;
}
