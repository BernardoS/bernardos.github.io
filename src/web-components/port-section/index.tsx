import * as DOM from 'DOM'
import style from './style.scss'

@DOM.customElement('port-section')
export class PortSection extends HTMLElement {
  public static template = (
    <template>
      <slot/>
    </template>
  )
  public static css = style.toString()
}


declare module 'DOM/types' {
  interface CustomElements {
    'port-section': DOM.HTMLElementAttributes<PortSection>
  }
}
