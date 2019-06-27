import {html} from 'lit-html'
import style from './style.scss'

export default html`
  <header id="header" class=${style.header}>
    <a href=${location.href}>
      <h1>BSunderhus</h1>
    </a>
  </header>
`

export {style}
