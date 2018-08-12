import marked from 'marked'
import unindent from 'strip-indent'
const domParser = new DOMParser()

export class HTMLMarkDownElement extends HTMLElement {
  connectedCallback () {
    if (this.src.trim) loadSrc(this) 
  }
  get src () {
    return this.getAttribute('src')
  }
  set src (src) {
    this.setAttribute('src', src)
  }
  get text () {
    return this.textContent
  }
  set text (text) {
    this.textContent = text
  }
}


/**
 * Parses a text node into markdown
 * @param {Text | Node | string} node node to be parsed
 */
function parse (node) {
  if (typeof node === 'string') {
    const str = unindent(node)
    return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
  } else if (node instanceof Text) {
    const str = unindent(node.textContent)
    return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
  } else return [node.cloneNode(true)]
}

/**
 * @param {HTMLMarkDownElement} element markdown element
 * @param {Node[]} nodes 
 */
function append (element, nodes) {
  if (nodes.length) nodes.forEach(node => element.appendChild(node))
}

/**
 * loads source file from MarkDown element
 * @param {HTMLMarkDownElement} element MarkDown element
 */
function loadSrc (element) {
  fetch(element.src)
  .then(response => response.ok ? response.text() : Promise.reject())
  .then((text) => {
    if (element.dispatchEvent(new Event('load'))) {
      while (element.hasChildNodes()) element.removeChild(element.firstChild)
      append(element, parse(text))
    }
  })
  .catch(() => {
    element.dispatchEvent(new Event('error', { cancelable: false }))
  })
}


customElements.define('mark-down', HTMLMarkDownElement)
