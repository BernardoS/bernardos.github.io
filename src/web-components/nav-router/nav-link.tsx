import * as DOM from 'DOM';

export interface NavLinkAttributes extends DOM.HTMLAnchorElementAttributes<NavLink> {
  ['active-class']?: string
  replace?: boolean
}

@DOM.customElement('nav-link', {extends: 'a'})
export class NavLink extends HTMLAnchorElement {
  public static readonly observedAttributes = [
    'active-class',
    'replace'
  ] as const
  public state: any
  public get activeClassName () {
    return this.getAttribute('active-class') || undefined
  }
  public set activeClassName (activeClassName) {
    if (activeClassName) this.setAttribute('active-class', activeClassName)
    else this.removeAttribute('active-class')
  }
  public get replace () {
    return this.hasAttribute('replace')
  }
  public set replace (replace) {
    if (replace) this.setAttribute('replace', '')
    else this.removeAttribute('replace')
  }
  public connectedCallback () {
    this.addEventListener('click', this._handleClick)
    window.addEventListener('popstate', this._handlePop, {passive: true})
    this._handlePop()
  }
  public disconnectedCallback () {
    this.removeEventListener('click', this._handleClick)
  }
  /**
   * Mouse click internal event handler
   * @private
   * @event PopStateEvent
   */
  private _handleClick (event: MouseEvent) {
    event.preventDefault()
    const state = this.state || this.getAttribute('state')
    if (this.replace) history.replaceState(state, this.title, this.pathname)
    else history.pushState(state, this.title, this.pathname)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  private _handlePop = () => {
    const elements = Array.from(this.querySelectorAll('[active-class]'))
    if (this.activeClassName) elements.push(this)
    if (elements.length) {
      elements.forEach(element => {
        const className = element.getAttribute('active-class')
        if (!className) return
        if (this.pathname === location.pathname ) element.classList.add(className)
        else element.classList.remove(className)
      })
    }
    // this.classList.toggle()
  }
}

declare module 'DOM/types' {
  interface CustomElements {
    'nav-link': NavLinkAttributes
  }
}
