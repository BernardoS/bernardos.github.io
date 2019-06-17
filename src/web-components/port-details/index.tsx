import * as DOM from 'DOM'
import style from './style.scss'

export interface PortDetailsAttr {
  open?: boolean
  sticky?: boolean
}

@DOM.customElement('port-details')
export class PortDetails extends HTMLElement implements PortDetailsAttr {
  public static readonly template = (
    <template>
      <details id="details">
        <summary>
          <slot name="summary"/>
        </summary>
        <slot/>
      </details>
    </template>
  )
  public static readonly css = style.toString()
  @DOM.attribute('open', Boolean)
  public open?: boolean
  @DOM.attribute('sticky', Boolean)
  public sticky?: boolean

  @DOM.listener('dom-attr-change:open')
  private _handleOpen () {
    if (this.open) this.scrollIntoView({behavior: 'smooth'})
  }

  @DOM.listener('dom-connected', {onConstructor: true})
  private _handleToggle () {
    this._details.open = this.open || false
    this._details.addEventListener('toggle', () => {
      this.open = this._details.open
    })
  }

  private get _details () {
    return this.shadowRoot!.getElementById('details') as HTMLDetailsElement
  }
}

declare module 'DOM/types' {
  interface CustomElements {
    'port-details': DOM.HTMLElementAttributes<PortDetails> & PortDetailsAttr
  }
}

