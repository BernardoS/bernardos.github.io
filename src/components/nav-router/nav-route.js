import * as DOM from 'DOM'

/**
 * @type WeakMap<HTMLNavRouteElement, () => void>
*/
const computeMatchMap = new WeakMap()

export class HTMLNavRouteElement extends HTMLElement {
  get path () {
    return this.getAttribute('path')
  }
  set path (path) {
    this.setAttribute('path', path)
  }
  constructor () {
    super ()
    this.attachShadow({mode: 'open'})
    computeMatchMap.set(this, computeMatch.bind(undefined, this))
  }
  connectedCallback () {
    const computeMatchFn = computeMatchMap.get(this)
    computeMatchFn()
    window.addEventListener('popstate', computeMatchFn, {passive: true})
  }
  disconnectedCallback () {
    const computeMatchFn = computeMatchMap.get(this)
    window.removeEventListener('popstate', computeMatchFn)
  }
}

/**
 * @param {HTMLNavRouteElement} route 
 */
function computeMatch (route) {
  if (location.pathname === route.path) render(route)
  else unrender(route)
}

/**
 * @param {HTMLNavRouteElement} route
 */
function render (route) {
  if (!route.shadowRoot.firstChild && route.dispatchEvent(new Event('enter'))) {
    route.shadowRoot.appendChild(<slot/>)
  }
}
/**
 * @param {HTMLNavRouteElement} route
 */
function unrender (route) {
  if (route.shadowRoot.firstChild && route.dispatchEvent(new Event('leave'))) {
    route.shadowRoot.removeChild(route.shadowRoot.firstChild)
  }
}

customElements.define('nav-route', HTMLNavRouteElement)
