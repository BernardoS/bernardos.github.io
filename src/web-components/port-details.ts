import HyperElement, {customElement, attribute} from '~/utils/hyper-element'
@customElement('port-details')
export default class PortDetails extends HyperElement {
  public static readonly tabIndex = 0
  public static readonly css = /*css*/`
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
  
  @attribute('open', Boolean)
  public open: boolean = false
  @attribute('sticky', Boolean)
  public sticky: boolean = false

  public render () {
    this.html`
      <button
        id="button"
        tabindex=${-1}
        aria-controls="content"
        aria-expanded=${this.open ? 'true' : 'false'}
        onclick=${this._handleClick}
      >
        <slot name="summary"/>
      </button>
      <slot id="content"/>
    `
  }
  public connectedCallback () {
    super.connectedCallback()
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
  private _handleClick = (ev: MouseEvent) => this.toggle()
  private _handleKeyDown = (ev: KeyboardEvent) => {
    const button = this.shadowRoot!.getElementById('button') as HTMLButtonElement
    if (ev.target === this && button && (ev.code === 'Space' || ev.code === 'Enter')) {
      button.click()
    }
  }
}
