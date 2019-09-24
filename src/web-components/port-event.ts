import HyperElement, { customElement } from '~/utils/hyper-element';

@customElement('port-event')
export default class PortEvent extends HyperElement {
  public render () {
    this.html`
      <slot name="title" class="title"/>
      <slot name="location" class="location"/>
      <slot class="content"/>
      <slot name="timestamp" class="timestamp"/>
    `
  }
  public static readonly css = /*css*/`
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
