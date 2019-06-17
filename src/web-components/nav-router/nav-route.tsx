import * as DOM from 'DOM'


export interface NavRouteAttributes extends DOM.HTMLElementAttributes<NavRoute> {
  path?: string | null
}

@DOM.customElement('nav-route')
export class NavRoute extends HTMLElement {
  public static readonly template = (
    <template/>
  )
  @DOM.attribute('path', String)
  public path?: string
  constructor () {
    super ()
  }
  @DOM.listener('dom-connected')
  protected _handleConnected () {
    this._computeMatch()
    window.addEventListener('popstate', this._computeMatch, {passive: true})
  }
  @DOM.listener('dom-disconnected')
  protected _handleDisconnected () {
    window.removeEventListener('popstate', this._computeMatch)
  }
  private _computeMatch () {
    if (location.pathname === this.path && !this.shadowRoot!.firstChild && this.dispatchEvent(new Event('enter'))) {
      this.shadowRoot!.appendChild(<slot/>)
    } else if (this.shadowRoot!.firstChild && this.dispatchEvent(new Event('leave'))) {
      this.shadowRoot!.removeChild(this.shadowRoot!.firstChild)
    }
  }
}



declare module 'DOM/types' {
  interface CustomElements {
    'nav-route': NavRouteAttributes
  }
}
