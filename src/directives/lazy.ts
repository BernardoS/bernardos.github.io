import {directive, NodePart} from 'lit-html'

declare global {
  interface Window {
    __PRERENDER_INJECTED?: boolean
  }
}

export type ImportFn = () => Promise<{default: unknown}>
export interface LazyOptions {
  disabled?: boolean
  loading?: unknown
  error?: unknown
}

const partMap = new WeakMap<NodePart, unknown>()

const defaultOptions: LazyOptions = {
  disabled: Boolean(window.__PRERENDER_INJECTED),
}

export default directive((fn: ImportFn, options: LazyOptions = defaultOptions) => (part: NodePart) => {
  if (!(part instanceof NodePart)) throw new Error('lazy directive can only be used in content bindings');
  const {disabled, loading, error} = options
  if (disabled) return
  if (partMap.has(part)) {
    const template = partMap.get(part)!
    if (part.value !== template) part.setValue(template)
    return
  } else if (loading) part.setValue(options.loading)

  fn()
  .then(({default: template}) => template)
  .catch(() => error)
  .then(value => {
    partMap.set(part, value)
    part.setValue(value)
    part.commit()
  })
})
