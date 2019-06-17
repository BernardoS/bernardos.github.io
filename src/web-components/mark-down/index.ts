import marked from 'marked'
import unindent from 'strip-indent'
import * as DOM from 'DOM'
const domParser = new DOMParser()

export interface MarkDownAttributes {
  src?: string | null
}

// @DOM.customElement('mark-down')
export class MarkDown extends HTMLElement {
  public connectedCallback  () {
    console.log(this)
  }
}


customElements.define('mark-down', MarkDown)
// function parse (node: Node | string| Text) {
//   if (typeof node === 'string') {
//     const str = unindent(node)
//     return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
//   } else if (node instanceof Text) {
//     const str = unindent(node.textContent || '')
//     return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
//   } else return [node.cloneNode(true)]
// }

// function append (element: MarkDown, nodes: Node[]) {
//   if (nodes.length) nodes.forEach(node => element.appendChild(node))
// }

// async function loadSrc (element: MarkDown) {
//   if (!element.src) return
//   try {
//     const response = await fetch(element.src)
//     if (response.ok && element.dispatchEvent(new Event('load'))) {
//       while (element.hasChildNodes()) element.removeChild(element.firstChild!)
//       append(element, parse(await response.text()))
//     } else element.dispatchEvent(new Event('error', { cancelable: false }))
//   } catch (error) {
//     element.dispatchEvent(new Event('error', { cancelable: false }))
//   }
// }

declare module 'DOM/types' {
  interface CustomElements {
    'mark-down': DOM.HTMLElementAttributes<MarkDown> & MarkDownAttributes
  }
}
