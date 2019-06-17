import {NodeType} from './types'
import {getIs, createNode, setAttribute, appendChild} from './helpers'

export function css (literals: TemplateStringsArray, ...placeholders: string[]) {
  return literals.raw[0]
}

export function hydrate(
  tag: string,
  attributes: object | null,
  ...children: NodeType[]
): Node {
  const element = createNode(tag, getIs(attributes))
  if (attributes) {
    for (const [key, attribute] of Object.entries(attributes)) {
      setAttribute(element, key, attribute)
    }
  }
  for (const child of children) appendChild(element, child)
  return element
}

export * from './types'
export * from './decorators'
export * from './component'
export {FRAGMENT} from './helpers'
