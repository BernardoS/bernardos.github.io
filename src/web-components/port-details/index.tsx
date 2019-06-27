import { css, html, customElement, LitElement, property } from 'lit-element';

@customElement('port-details')
export default class PortDetails extends LitElement {
  // public static readonly tabIndex = 0
  public static readonly styles = css`
    :host {
      display: block;
    }
    :host([sticky][open]) button {
      position: sticky;
      top: 0;
    }

    :host(:not([open])) slot:not([name]) {
      display: none
    }

    :host([hidden]) {
      display: none;
    }

    slot {
      display: block;
    }


    slot[name="summary"] {
      cursor: pointer;
    }
    slot[name="summary"]:focus {
      outline: none;
    }


    button {
      width: 100%;
      text-align: unset;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      background: none;
      border: 0;
      color: inherit;
      font: inherit;
      line-height: normal;
      overflow: visible;
      padding: 0;
      -webkit-appearance: button;
      -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
    }
    button::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `
  
  @property({type: Boolean, reflect: true})
  public open: boolean = false
  @property({type: Boolean, reflect: true})
  public sticky: boolean = false

  public render () {
    return html`
      <button
        id="button"
        tabindex=${-1}
        aria-controls="content"
        @click=${this.toggle}
        aria-expanded=${this.open ? 'true' : 'false'}
      >
        <slot name="summary"></slot>
      </button>
      <slot id="content"></slot>
    `
  }
  public connectedCallback () {
    super.connectedCallback()
    if (!this.hasAttribute('tabindex')) this.tabIndex = 0
    this.addEventListener('keydown', this._handleKeyDown, {passive: true})
  }
  public disconnectedCallback () {
    super.disconnectedCallback()
    this.removeEventListener('keydown', this._handleKeyDown)
  }
  public toggle () {
    this.open = !this.open
    this.dispatchEvent(new Event('toggle', {bubbles: false, cancelable: false}))
    if (this.open) {
      requestAnimationFrame(() => (
        this.scrollIntoView({behavior: 'smooth'})
      ))
    }
  }
  private _handleKeyDown = (ev: KeyboardEvent) => {
    const button = this.shadowRoot!.getElementById('button') as HTMLButtonElement
    if (ev.target === this && button && (ev.code === 'Space' || ev.code === 'Enter')) {
      button.click()
    }
  }
}
