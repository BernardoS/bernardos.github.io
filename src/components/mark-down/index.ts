import marked from 'marked'
import unindent from 'strip-indent'
import * as DOM from 'DOM';
const domParser = new DOMParser()

export interface MarkDownAttrs extends DOM.GlobalAttributes<MarkDown> {
  src?: string | null
  text?: string | null
}

@DOM.customElement('mark-down')
export class MarkDown extends HTMLElement implements MarkDownAttrs {
  public connectedCallback () {
    if (this.src && this.src.trim) loadSrc(this) 
  }
  public get src () {
    return this.getAttribute('src')
  }
  public set src (src) {
    if (src) this.setAttribute('src', src)
    else this.removeAttribute('src')
  }
  public get text () {
    return this.textContent
  }
  public set text (text) {
    this.textContent = text
  }
}


function parse (node: Node | string| Text) {
  if (typeof node === 'string') {
    const str = unindent(node)
    return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
  } else if (node instanceof Text) {
    const str = unindent(node.textContent || '')
    return Array.from(domParser.parseFromString(marked(str), 'text/html').body.childNodes)
  } else return [node.cloneNode(true)]
}

function append (element: MarkDown, nodes: Node[]) {
  if (nodes.length) nodes.forEach(node => element.appendChild(node))
}

async function loadSrc (element: MarkDown) {
  if (!element.src) return
  try {
    const response = await fetch(element.src)
    if (response.ok && element.dispatchEvent(new Event('load'))) {
      while (element.hasChildNodes()) element.removeChild(element.firstChild!)
      append(element, parse(await response.text()))
    } else element.dispatchEvent(new Event('error', { cancelable: false }))
  } catch (error) {
    element.dispatchEvent(new Event('error', { cancelable: false }))
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mark-down': MarkDownAttrs
    }
  }
}
