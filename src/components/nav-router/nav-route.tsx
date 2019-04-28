import * as DOM from '../../utils/DOM'

const computeMatchMap = new WeakMap<NavRoute, () => void>()

export interface NavRouteAttrs extends DOM.GlobalAttributes<NavRoute> {
  path?: string | null
}

export class NavRoute extends HTMLElement implements NavRouteAttrs {
  public readonly shadowRoot!: ShadowRoot
  get path () {
    return this.getAttribute('path')
  }
  set path (path) {
    if (path) this.setAttribute('path', path)
    else this.removeAttribute('path')
  }
  constructor () {
    super ()
    this.attachShadow({mode: 'open'})
    computeMatchMap.set(this, computeMatch.bind(undefined, this))
  }
  connectedCallback () {
    const computeMatchFn = computeMatchMap.get(this)
    if (computeMatchFn) {
      computeMatchFn()
      window.addEventListener('popstate', computeMatchFn, {passive: true})
    }
  }
  disconnectedCallback () {
    const computeMatchFn = computeMatchMap.get(this)
    if (computeMatchFn) {
      window.removeEventListener('popstate', computeMatchFn)
    }
  }
}

function computeMatch (route: NavRoute) {
  if (location.pathname === route.path) render(route)
  else unrender(route)
}

function render (route: NavRoute) {
  if (!route.shadowRoot!.firstChild && route.dispatchEvent(new Event('enter'))) {
    route.shadowRoot.appendChild(<slot/>)
  }
}
function unrender (route: NavRoute) {
  if (route.shadowRoot.firstChild && route.dispatchEvent(new Event('leave'))) {
    route.shadowRoot.removeChild(route.shadowRoot!.firstChild)
  }
}

customElements.define('nav-route', NavRoute)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'nav-route': NavRouteAttrs
    }
  }
}
