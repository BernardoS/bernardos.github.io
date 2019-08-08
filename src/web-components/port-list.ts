import HyperElement from '~/utils/hyper-element';

export class PortList extends HyperElement {
  public static readonly css = /*css*/`
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
  public render () {
    this.html`<slot/>`
  }
}

export class PortListItem extends HyperElement {
  public static readonly css = /*css*/`
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
  public render () {
    this.html`
      <span class="bullet"/>
      <span>
        <slot/>
      </span>
    `
  }
}
