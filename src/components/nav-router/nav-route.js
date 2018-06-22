import * as DOM from '../../utils/DOM'
import NavRouter from './nav-router'

const _listener = new WeakMap()

@DOM.define('nav-route')
export default class NavRoute extends HTMLElement {
  constructor () {
    super ()
    this.attachShadow({mode: 'open'})
  }
  connectedCallback () {
    /** @type {NavRouter} */
    this.router = this.closest('nav-router')
    if (computeMatch(this)) render(this)
    const unlisten = this.router.history.listen(() => {
      if (computeMatch(this)) render(this)
      else unrender(this)
    })
    _listener.set(this, unlisten)
  }
  disconnectedCallback () {
    _listener.get(this)()
  }

  get path () {
    return this.getAttribute('path')
  }
  set path (path) {
    this.setAttribute('path', path)
  }
}
/**
 * @param {NavRoute} route
 */
function computeMatch(route) {
  if (!(route.router instanceof NavRouter)) {
    throw new Error('nav-route element should be inserted nested to a nav-router element')
  }
  return route.router.history.location.pathname === route.path
}


/**
 * @param {NavRoute} route
 */
function render (route) {
  if (!route.shadowRoot.firstChild && route.dispatchEvent(new Event('enter'))) {
    route.shadowRoot.appendChild(<slot/>)
  }
}
/**
 * @param {NavRoute} route
 */
function unrender (route) {
  if (route.shadowRoot.firstChild && route.dispatchEvent(new Event('leave'))) {
    route.shadowRoot.removeChild(route.shadowRoot.firstChild)
  }
}
