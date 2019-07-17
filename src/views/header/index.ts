import hyper from 'hyperhtml'
import style from './style.scss'

export default hyper`
  <header id="header" class=${style.header}>
    <a href=${location.href}>
      <h1>BSunderhus</h1>
    </a>
  </header>
`

export {style}
