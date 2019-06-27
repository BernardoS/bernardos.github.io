import {html, LitElement, css, customElement, property} from 'lit-element'
import cn from 'classnames'

export interface HighLightTextAttrs {
  text?: string
}

@customElement('highlight-text')
export default class HighLightText2 extends LitElement {
  public static readonly styles = css`
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
  @property({type: String})
  public text: string = ''
  public render () {
    return html`
      ${this.text.split('').map(char => html`
        <span class=${cn(/^\W+$/.test(char) && 'highlight')}>
          ${char}
        </span>
      `)}
    `
  }
}
