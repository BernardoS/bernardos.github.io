import * as DOM from 'DOM'
import style from './style.scss'



@DOM.customElement('port-header')
export class PortHeader extends HTMLElement {
  public static readonly template = (
    <template>
      <span class={style.title}>
        <slot/>
      </span>
      <div class={style.line}/>
    </template>
  )
  public static readonly css = style.toString()
}

declare module 'DOM/types' {
  interface CustomElements {
    'port-header': DOM.HTMLElementAttributes<PortHeader>
  }
}

