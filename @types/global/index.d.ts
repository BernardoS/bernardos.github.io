declare module '*.svg' {
  const svg: string
  export default  svg
}
declare module '*.html' {
  const html: unknown
  export default html
}

// declare module '*.css' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

// declare module '*.sass' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare module '*.png' {
  const png: string
  export default png
}

declare module '*.ico' {
  const ico: string
  export default ico
}

declare module "*.md" {
  const md: string
  export default md
}
declare module "*.otf" {
  const otf: string
  export default otf
}

declare module "*.ttf" {
  const ttf: string
  export default ttf
}


declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
  }
}

interface RequestIdleCallbackDeadline {
  readonly didTimeout: boolean
  timeRemaining: () => number
}

declare function requestIdleCallback(
  callback: (deadline: RequestIdleCallbackDeadline) => void,
  opts?: {timeout: number}
): number
declare function cancelIdleCallback(
  handle: number
): void

interface Window {
  requestIdleCallback(
    callback: (deadline: RequestIdleCallbackDeadline) => void,
    opts?: {timeout: number}
  ): number
  cancelIdleCallback(
    handle: number
  ): void
}


interface NodeList {
  [Symbol.iterator] (): Iterator<Node>
}
interface NodeListOf<TNode extends Node> extends NodeList {
  [Symbol.iterator] (): Iterator<TNode>
}
