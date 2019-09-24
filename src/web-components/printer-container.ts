import { customElement } from '~/utils/hyper-element';

@customElement('printer-container')
export class PrinterContainer extends HTMLElement {
  public connectedCallback () {
    window.addEventListener('beforeprint', this._handleEvent)
    window.addEventListener('afterprint', this._handleEvent)
    if (this.hasAttribute('scroll-top')) {
      window.addEventListener('DOMContentLoaded', () => {
        let y: number
        window.addEventListener('beforeprint', () => {
          y = window.scrollY
          window.scroll({top: 0})
        })
        window.addEventListener('afterprint', () => window.scroll({top: y}))
      }, {once: true})
    }
  }
  public disconnectedCallback () {
    window.removeEventListener('beforeprint', this._handleEvent)
    window.removeEventListener('afterprint', this._handleEvent)
  }
  private _handleEvent = ({type, bubbles, cancelable, composed}: Event) => {
    const printAwareElements = this.querySelectorAll('[print-aware]')
    const newEvent = new CustomEvent(type, {bubbles, cancelable, composed})
    for (const element of printAwareElements) element.dispatchEvent(newEvent)
    this.dispatchEvent(newEvent)
  }
}
