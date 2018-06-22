import * as DOM from '../../utils/DOM'
import marked from 'marked'
import unindent from 'strip-indent'
import flatMap from '../../utils/flatMap'
import style from './style.scss'
import emoji from 'node-emoji'
const domParser = new DOMParser()


@DOM.define('mark-down')
export class MarkDown extends DOM.Component {
  static observedAttributes = ['src']
  constructor () {
    super()
    if (this.childNodes.length && this.shadowRoot.childElementCount === 1) {
      appendToShadow(this, flatMap(Array.from(this.childNodes), parse))
    }
  }
  createTemplate () {
    return <style>{style}</style>
  }
  attributeChangedCallback () {
    if (this.shadowRoot.childElementCount === 1) loadSrc(this)
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
    const str = unindent(node).replace(/(:.*:)/g, (match) => emoji.emojify(match))
    return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
  } else if (node instanceof Text) {
    const str = unindent(node.textContent).replace(/(:.*:)/g, (match) => emoji.emojify(match))
    return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
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
