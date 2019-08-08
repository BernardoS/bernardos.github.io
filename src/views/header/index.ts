import hyper from 'hyperhtml'
import style from './style.scss'
import {style as globals} from '~/views/app'
import cn from 'classnames'
import contact from '../contact'

export default hyper`
  <header id="header" class=${cn(style.header)}>
    <a href=${location.href}>
      <h1>BSunderhus</h1>
    </a>
    <aside class=${cn(globals.printDisplayNone, globals.atScreen, style.aside)}>
      ${contact}
    </aside>
  </header>
`

export {style}
