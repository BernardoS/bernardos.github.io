import {html, css, customElement, LitElement} from 'lit-element'

@customElement('port-list')
export class PortList extends LitElement {
  public static readonly styles = css`
    :host {
      display: block;
      &:focus {
        outline: none;
      }
    }
    :host([hidden]) {
      display: none;
    }
    :host(:focus) {
      outline: none;
    }  
  `
  public static readonly role = 'list'
  public connectedCallback () {
    super.connectedCallback()
    if (!this.hasAttribute('role')) this.setAttribute('role', 'list')
  }
  public render () {
    return html`<slot></slot>`
  }
}

@customElement('port-list-item')
export class PortListItem extends LitElement {
  public static readonly styles = css`
    :host {
      display: flex;
      align-items: center;
      padding: var(--space);
    }
    :host([hidden]) {
      display: none;
    }
    :host(:focus) {
      outline: none;
    }
    .bullet {
      flex: 0 0 auto;
      box-sizing: border-box;
      height: 6px;
      width: 6px;
      background-color: var(--port-list-item-bullet-color);
      border-radius: 100%;
      display: inline-block;
      margin-right: var(--space);
    }  
  `
  public static readonly role = 'listitem'
  public connectedCallback () {
    super.connectedCallback()
    if (!this.hasAttribute('role')) this.setAttribute('role', 'listitem')
  }
  protected render () {
    return html`
      <span class="bullet"></span>
      <span>
        <slot></slot>
      </span>
    `
  }
}
