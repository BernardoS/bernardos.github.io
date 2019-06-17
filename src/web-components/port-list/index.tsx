import * as DOM from 'DOM'
import listStyle from './list.scss'
import listItemStyle from './list-item.scss'

@DOM.customElement('port-list')
export class PortList extends HTMLElement {
  public static readonly css = listStyle.toString()
  public static readonly template = (
    <template>
      <slot/>
    </template>
  )
  @DOM.listener('dom-connected')
  protected _handleConnected () {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'list')
  }
}

@DOM.customElement('port-list-item')
export class PortListItem extends HTMLElement {
  public static readonly template = (
    <template>
      <span class={listItemStyle.bullet}/>
      <span><slot/></span>
    </template>
  )
  public static readonly css = listItemStyle.toString()
  @DOM.listener('dom-connected')
  protected _handleConnected () {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'listitem')
  }
}

declare module 'DOM/types' {
  interface CustomElements {
    'port-list-item': DOM.HTMLElementAttributes<PortListItem>
    'port-list': DOM.HTMLElementAttributes<PortList>
  }
}
