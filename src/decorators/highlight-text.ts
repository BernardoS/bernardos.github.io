import {html} from 'lit-element'
import cn from 'classnames'
import style from './style.scss'

export default function highlight(text: string) {
  return html`${text.split('').map(char => html`
    <span class=${cn(/^\W+$/.test(char) && style.highlight)}>
      ${char}
    </span>
  `)}`
}
