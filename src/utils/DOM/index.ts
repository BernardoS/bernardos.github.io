import {NodeType} from './types'

export function hydrate(
  tag: string,
  attributes: object | null,
  ...children: NodeType[]
): Node {
  const element = createNode(tag)
  if (attributes) {
    for (const [key, attribute] of Object.entries(attributes)) {
      setAttribute(element, key, attribute)
    }
  }
  for (const child of children) appendChild(element, child)
  return element
}
export const FRAGMENT = '@fragment' as const

function createNode (tag: string): Node {
  switch (tag) {
    case FRAGMENT: return document.createDocumentFragment()
    default: return document.createElement(tag)
  }
}

function appendChild(node: Node, child: NodeType) {
  if (node instanceof HTMLTemplateElement) node = node.content
  const childNode = childToNode(child)
  if (childNode) node.appendChild(childNode)
}

function childToNode(child: NodeType | NodeType[]): Node | undefined {
  if (child instanceof Node) return child
  if (typeof child === 'string') return document.createTextNode(child)
  if (typeof child === 'number') return document.createTextNode(child.toString())
  if (typeof child === 'symbol') return document.createTextNode(child.toString())
  if (Array.isArray(child)) {
    const fragment = document.createDocumentFragment()
    for (const c of child) {
      const node = childToNode(c)
      if (node) fragment.appendChild(node)
    }
    return fragment
  }
  if (typeof child === 'object') {
    // return document.createTextNode(child.toString())
  }
}

function setAttribute<Attribute>(node: Node, key: string, attribute: Attribute) {
  if (node instanceof HTMLElement) {
    if (typeof attribute === 'function') throw new TypeError('functions not allowed')
    node.setAttribute(key, attribute.toString())
  }
  throw new TypeError(`uncharted attribute type ${typeof attribute}`)
}

export * from './types'
export * from './decorators'
