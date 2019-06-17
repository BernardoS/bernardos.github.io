import { NodeType } from './types'

const createDocumentFragment = () => {
  return document.createDocumentFragment()
}
const createElement = (tag: string, is?: string) => {
  switch (tag) {
    case "svg":
    case "path":
    case "g":
    case "rect":
    case "text":
      return document.createElementNS("http://www.w3.org/2000/svg", tag)
    default:
      return document.createElement(tag, { is })
  }
}
export const FRAGMENT = '@fragment' as const

export const getIs = (attributes: object | null) =>
attributes && "is" in attributes
  ? ((attributes as any).is as string)
  : undefined

export function createNode(tag: string, is?: string): Node {
  switch (tag) {
    case FRAGMENT:
      return createDocumentFragment()
    default:
      return createElement(tag, is)
  }
}

export function appendChild(node: Node, child: NodeType) {
  if (node instanceof HTMLTemplateElement) node = node.content
  const childNode = childToNode(child)
  if (childNode) node.appendChild(childNode)
}

function childToNode(child: NodeType): Node | null {
  if (child instanceof Node) return child
  if (child instanceof Text) return child
  if (typeof child === "string") return document.createTextNode(child)
  if (typeof child === "number")
    return document.createTextNode(child.toString())
  if (typeof child === "symbol")
    return document.createTextNode(child.toString())
  if (Array.isArray(child)) {
    const fragment = document.createDocumentFragment()
    for (const c of child) {
      const node = childToNode(c)
      if (node) fragment.appendChild(node)
    }
    return fragment
  }
  return null
}

export function setAttribute<Attribute>(
  node: Node,
  key: string,
  attribute: Attribute
) {
  if (node instanceof Element) {
    switch (typeof attribute) {
      case "object":
        throw new TypeError("objects not allowed")
      case "function":
        throw new TypeError("functions not allowed")
      case "undefined":
        return node.removeAttribute(key)
      case "boolean":
        return node.toggleAttribute(key, attribute)
      default:
        return node.setAttribute(key, attribute.toString())
    }
  }
  throw new TypeError(`uncharted attribute type ${typeof attribute}`)
}


export const isHTMLElement = (Target: any): Target is HTMLElement =>
  Target instanceof HTMLElement

export const isHTMLElementClass = (Target: any): Target is typeof HTMLElement =>
  HTMLElement.prototype.isPrototypeOf(Target.prototype)
