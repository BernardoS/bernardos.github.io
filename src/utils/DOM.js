export const define = (tag) => (Class) => {
  customElements.define(tag, Class)
}

export const insertM = (element, fn) => {
  const content = fn()
  if (content instanceof HTMLElement) element.appendChild(content)
  else element.textContent = content
}

export const wrap = (acessor, fn) => {
  fn(acessor())
}

export const insert = (element, fn) => {
  element.textContent = fn()
}

export class Component extends HTMLElement { 
  constructor() {
    super()
    const template = this.createTemplate()
    if (template instanceof Node) {
      this.attachShadow({mode: 'open'})
      this.shadowRoot.appendChild(template)
    }
  }
  /**
   * @returns {Node}
   */
   createTemplate () {/* noop */}
}
