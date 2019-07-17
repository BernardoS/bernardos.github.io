import HyperElement, {customElement, attribute} from '~/utils/hyper-element'
import cn from 'classnames'

@customElement('highlight-text')
export class HighLightText extends HyperElement {
  public static readonly css = /*css*/`
    :host {
      display: inline;
    }
    :host([hidden]) {
      display: none;
    }
    .highlight {
      color: var(--highlight-text-color);
    }
  `
  @attribute('text')
  public text: string = ''

  public render () {
    this.html`
      ${this.text.split('').map((char, i) => this.wire(`${i}`)`
        <span class=${cn(/^\W+$/.test(char) && 'highlight')}>
          ${char}
        </span>
      `)}
    `
  }
}
