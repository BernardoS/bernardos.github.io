import {html, css, customElement, LitElement} from 'lit-element'

@customElement('port-event')
export default class PortEvent extends LitElement {
  protected render () {
    return html`
      <slot name="title" class="title"></slot>
      <slot name="location" class="location"></slot>
      <slot class="content"></slot>
      <slot name="timestamp" class="timestamp"></slot>
    `
  }
  public static readonly styles = css`
    :host {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "title   location"
        "content content"
        ".....   timestamp";
      grid-gap: var(--space);
    }
    :host([hidden]) {
      display: none;
    }
    :host(:focus) {
      outline: none;
    }
    slot {
      display: block;
    }
    .title {
      grid-area: title;
    }
    .location {
      justify-self: end;
      grid-area: location;
    }
    .timestamp {
      grid-area: timestamp;
      justify-self: end;
    }
    .content {
      align-self: baseline;
      grid-area: content;
    }
  `
}
