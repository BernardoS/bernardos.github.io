/**
 * @typedef {Node|symbol|string|number|boolean} Child
 */

/**
 * @param {string} tag
 * @param {{}=} attributes 
 * @param {(HTMLElement|string)[]} children
 * @returns {HTMLElement}
 */
export function hydrate(tag, attributes, ...children) {
  const element = document.createElement(tag)
  if (attributes) Object.keys(attributes).forEach(key => setAttribute(element, key, attributes[key]))
  for (const child of children) appendChild(element, child)
  return element
}
/**
 * 
 * @param {HTMLElement} element 
 * @param {Child} child 
 */
function appendChild(element, child) {
  if (element instanceof HTMLTemplateElement) element = element.content
  const node = childToNode(child)
  if (node) element.appendChild(node)
}

/**
 * @param {Child|Child[]} child 
 * @returns {Node}
 */
function childToNode(child) {
  if (child instanceof Node) return child
  if (typeof child === 'string') return document.createTextNode(child)
  if (typeof child === 'number') return document.createTextNode(child)
  if (typeof child === 'symbol') return document.createTextNode(child)
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
/**
 * @param {HTMLElement} element 
 * @param {string} key
 * @param {string|number|Function} attribute 
 */
function setAttribute(element, key, attribute) {
  if (typeof attribute === 'string') return setStringAttribute(element, key, attribute)
  if (typeof attribute === 'number') return setNumberAttribute(element, key, attribute)
  if (typeof attribute === 'function') throw new TypeError('functions not allowed')
  throw new TypeError(`uncharted attribute type ${typeof attribute}`)
}

/**
 * @param {HTMLElement} element 
 * @param {string} key
 * @param {string} attribute 
 */
function setStringAttribute(element, key, attribute) {
  element.setAttribute(key, attribute)
}
/**
 * @param {HTMLElement} element 
 * @param {string} key
 * @param {number} attribute 
 */
function setNumberAttribute(element, key, attribute) {
  element.setAttribute(key, attribute)
}
