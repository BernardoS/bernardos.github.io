import * as DOM from 'DOM'
import style from './style.scss'

@DOM.customElement('port-event')
export class PortEvent extends HTMLElement {
  public static readonly template = (
    <template>
      <slot name="title" class={style.title} />
      <div class={style.subTitleContainer} >
        <slot name="location" class={style.location} />
        <slot name="timestamp" class={style.timestamp} />
      </div>
      <slot class={style.content}/>
    </template>
  )
  public static readonly css = style.toString()
}


declare module 'DOM/types' {
  interface CustomElements {
    'port-event': DOM.HTMLElementAttributes<PortEvent>
  }
}
