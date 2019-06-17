import * as DOM from 'DOM'
import cn from 'classnames'
import style from './style.scss'

export interface HighLightTextAttributes {
  value?: string
}

@DOM.customElement('highlight-text')
export class HighLightText extends HTMLElement implements HighLightTextAttributes {
  public static readonly template = (
    <template>
      <span id="value"/>
    </template>
  )
  public static readonly css = style.toString()
  @DOM.attribute('value', String)
  public value?: string

  @DOM.listener('dom-attr-change:value', {onConstructor: true})
  protected _valueChangedCallback () {
    this.shadowRoot!.replaceChild(
      <span id="value">{punctation(this.value || '')}</span>,
      this.shadowRoot!.getElementById('value')!
    )
  }
}

declare module 'DOM/types' {
  interface CustomElements {
    'highlight-text': HighLightTextAttributes
  }
}


function punctation (text: string) {
  return text.split('').map(char => (
    <span class={cn(/^\W+$/.test(char) && style.highlight)}>
      {char}
    </span>
  ))
}
