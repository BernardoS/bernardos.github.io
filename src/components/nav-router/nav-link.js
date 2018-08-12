
export class HTMLNavLinkElement extends HTMLAnchorElement {
  static observedAttributes = ['active-class']
  get activeClassName () {
    return this.getAttribute('active-class')
  }
  set activeClassName (activeClassName) {
    this.setAttribute('active-class', activeClassName)
  }
  get replace () {
    return this.hasAttribute('replace')
  }
  set replace (replace) {
    if (replace) this.setAttribute('replace', '')
    else this.removeAttribute('replace')
  }
  connectedCallback () {
    this.addEventListener('click', this._handleClick)
    window.addEventListener('popstate', this._handlePop, {passive: true})
    this._handlePop()
  }
  disconnectedCallback () {
    this.removeEventListener('click', this._handleClick)
  }
  /**
   * Mouse click internal event handler
   * @private
   * @param {MouseEvent} event 
   * @event PopStateEvent
   */
  _handleClick (event) {
    event.preventDefault()
    const state = this.state || this.getAttribute('state')
    if (this.replace) history.replaceState(state, this.title, this.pathname)
    else history.pushState(state, this.title, this.pathname)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  _handlePop = () => {
    const elements = Array.from(this.querySelectorAll('[active-class]'))
    if (this.activeClassName) elements.push(this)
    if (elements.length) {
      elements.forEach(element => {
        const className = element.getAttribute('active-class')
        if (this.pathname === location.pathname) element.classList.add(className)
        else element.classList.remove(className)
      })
    }
    // this.classList.toggle()
  }
}

customElements.define('nav-link', HTMLNavLinkElement, {extends: 'a'})
