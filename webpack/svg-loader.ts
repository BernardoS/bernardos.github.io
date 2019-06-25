// import { stringifyRequest } from 'loader-utils';
import { loader } from 'webpack'

export default function (this: loader.LoaderContext, source: string) {
  const XMlTagRGX = /<\?\s*xml[^?]*\?>/gm
  const namespacedAttributesRGX = /\w+:\w+\s*=\s*"[^"]+\s*"/gm
  const svg = source.replace(XMlTagRGX, '').replace(namespacedAttributesRGX, '').trim()
  return `
    import * as DOM from "DOM"
    export default (attrs = {}) => (
      ${svg.startsWith('<svg') ? svg.slice(0, 4).concat(` {...attrs} `).concat(svg.slice(4)) : svg}
    )
  `
}
