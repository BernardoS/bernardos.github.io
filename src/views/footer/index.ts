import hyper from 'hyperhtml'

import style from './style.scss'
import {style as globals} from '~/views/app'
import cn from 'classnames'

import favicon from '~/svg/favicon.svg'
import instagram from '~/svg/instagram.svg'
import facebook from '~/svg/facebook.svg'
import linkedin from '~/svg/linkedin.svg'
import github from '~/svg/github.svg'
import mail from '~/svg/envelope-solid.svg'

export default hyper`
  <footer id="footer" class=${cn(style.footer, globals.printDisplayNone)}>
    <div class=${style.logo}>
      ${{html: favicon}}
    </div>
    <h3 class=${style.name}>
      <i>Bernardo Sunderhus</i>
    </h3>
    <div class=${style.icons}>
      <a class=${style.icon} aria-label="E-mail link" target="__blank" href="mailto:bernardo.sunderhus@gmail.com">
        ${{html: mail}}
      </a>
      <a class=${style.icon} aria-label="Github link" target="__blank" href="https://github.com/bsunderhus">
        ${{html: github}}
      </a>
      <a class=${style.icon} aria-label="Linkedin link" target="__blank" href="https://www.linkedin.com/in/bsunderhus">
        ${{html: linkedin}}
      </a>
      <a class=${style.icon} aria-label="Facebook icon" target="__blank" href="https://www.facebook.com/bsunderhus">
        ${{html: facebook}}
      </a>
      <a class=${style.icon} aria-label="Instagram icon" target="__blank" href="https://www.instagram.com/bsunderhus/">
        ${{html: instagram}}
      </a>
    </div>
  </footer>
`

export {style}
