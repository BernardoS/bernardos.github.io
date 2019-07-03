import {directive, NodePart} from 'lit-html'
import pMinDelay from '~/utils/p-min-delay'

declare global {
  interface Window {
    __PRERENDER_INJECTED?: boolean
  }
}

export type ImportFn = () => Promise<{default: unknown}>
export interface LazyOptions {
  delay?: number
  error?: unknown
  loading?: unknown
  disabled?: boolean
  delayRejection?: boolean
}

const partMap = new WeakMap<NodePart, unknown>()

const defaultOptions: LazyOptions = {
  delay: 0,
  disabled: false,
  delayRejection: false
}

export default directive((fn: ImportFn, options: LazyOptions = defaultOptions) => (part: NodePart) => {
  if (!(part instanceof NodePart)) throw new Error('lazy directive can only be used in content bindings');
  const {disabled, loading, error, delay, delayRejection} = {...defaultOptions, ...options}
  if (disabled) return
  if (partMap.has(part)) {
    const template = partMap.get(part)!
    if (part.value !== template) part.setValue(template)
    return
  } else if (loading) part.setValue(options.loading)

  pMinDelay(fn(), delay, {delayRejection})
  .then(({default: template}) => template)
  .catch(() => error)
  .then(value => {
    partMap.set(part, value)
    part.setValue(value)
    part.commit()
  })
})
