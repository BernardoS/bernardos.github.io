import {NodeType, Reference} from './types'
import {getIs, createNode, setAttribute, appendChild, isRefObject, isFunctionComponent} from './helpers'
import {CustomAttributes} from './attributes'

export function css (literals: TemplateStringsArray, ...placeholders: string[]) {
  return literals.raw[0]
}

const customAttributesArray: Array<keyof CustomAttributes<Element>> = [
  'ref',
  'children'
]
const customAttributesSet = new Set<string>(customAttributesArray)

export function hydrate(
  tag: JSX.Tag<object>,
  attributes: object | null,
  ...children: NodeType[]
): Node {
  if (isFunctionComponent(tag)) {
    return tag({...attributes, children})
  }
  const element = createNode(tag, getIs(attributes))
  for (const child of children) appendChild(element, child)
  if (element instanceof DocumentFragment) return element
  if (attributes) {
    for (const [key, attribute] of Object.entries(attributes)) {
      if (!customAttributesSet.has(key)) {
        setAttribute(element, key, attribute)
      } else if (key === 'ref' && isRefObject(attribute)) {
        Object.defineProperty(attribute, 'instance', {
          configurable: true,
          value: element
        })
      }
    }
  }
  return element
}

export function createRef<E extends Element>(): Reference<E> {
  return {instance: undefined}
}

export * from './types'
export * from './decorators'
export {default as Component, getShadow as getShadowRoot, hasShadow as hasShadowRoot} from './component'
export {FRAGMENT} from './helpers'
