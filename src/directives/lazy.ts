import pMinDelay from '~/utils/p-min-delay'

declare global {
  interface Window {
    __PRERENDER_INJECTED?: boolean
  }
}

export type ImportFn<T = unknown> = () => Promise<{default: T}>

export interface LazyOptions {
  minDelay?: number
  error?: unknown
  placeholder?: unknown
  disabled?: boolean
  delayRejection?: boolean
}

const defaultOptions: LazyOptions = {
  minDelay: 0,
  disabled: false,
  delayRejection: false
}

export default function lazy<T = unknown>(fn: ImportFn<T>, options: LazyOptions = defaultOptions) {
  const {disabled, placeholder, error, minDelay: delay, delayRejection} = {...defaultOptions, ...options}
  if (disabled) return
  return {
    placeholder,
    any: pMinDelay(
      fn(),
      delay,
      {delayRejection}
    ).then(result => result.default)
    .catch(() => error) as Promise<T>
  }
}
