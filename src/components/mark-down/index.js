import * as DOM from '../../utils/DOM'
import marked from 'marked'
import unindent from 'strip-indent'
import flatMap from '../../utils/flatMap'
const domParser = new DOMParser()


@DOM.define('mark-down')
export class MarkDown extends DOM.Component {
  static observedAttributes = ['src']
  connectedCallback () {
    cleanShadow(this)
    if (this.childElementCount) appendToShadow(this, flatMap(Array.from(this.childNodes), parse))
  }
  attributeChangedCallback (name) {
    if (name === 'src') loadSrc(this)
  }
  get src () {
    return this.getAttribute('src')
  }
  set src (src) {
    this.setAttribute('src', src)
  }
}


/**
 * Parses a text node into markdown
 * @param {Text | Node | string} node node to be parsed
 */
function parse (node) {
  if (typeof node === 'string') {
    return Array.from(domParser.parseFromString(marked(unindent(node)), 'text/html').body.childNodes)
  } else if (node instanceof Text) {
    return Array.from(domParser.parseFromString(marked(unindent(node.textContent)), 'text/html').body.childNodes)
  } else return [node.cloneNode(true)]
}

/**
 * @param {MarkDown} element markdown element
 * @param {Node[]} nodes 
 */
function appendToShadow (element, nodes) {
  if (nodes.length) nodes.forEach(node => element.shadowRoot.appendChild(node))
}

/**
 * @param {MarkDown} element markdown element
 */
function cleanShadow (element) {
  while (element.shadowRoot.hasChildNodes()) element.shadowRoot.removeChild(element.shadowRoot.firstChild)  
}

/**
 * loads source file from MarkDown element
 * @param {MarkDown} element MarkDown element
 */
function loadSrc (element) {
  fetch(element.src)
  .then(response => response.ok ? response.text() : Promise.reject())
  .then((text) => {
    if (element.dispatchEvent(new Event('load'))) appendToShadow(element, parse(text))
  })
  .catch(() => {
    element.dispatchEvent(new Event('error', { cancelable: false }))
  })
}
