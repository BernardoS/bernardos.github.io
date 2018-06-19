export const define = (tag) => (Class) => {
  customElements.define(tag, Class)
}

export const insertM = (element, fn) => {
  element.textContent = fn()
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
    this.attachShadow({mode: 'open'})
    const template = this.createTemplate()
    if (template instanceof Node) this.shadowRoot.appendChild(template)
  }
  /**
   * @returns {Node}
   * @memberof Component
   */
   createTemplate () {/* noop */}
}
