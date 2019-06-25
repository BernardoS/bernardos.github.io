import {html} from 'lit-html'
import {unsafeHTML} from 'lit-html/directives/unsafe-html'

import style from './style.scss'

import favicon from '~/svg/favicon.svg'
import instagram from '~/svg/instagram.svg'
import facebook from '~/svg/facebook.svg'
import linkedin from '~/svg/linkedin.svg'
import github from '~/svg/github.svg'
import mail from '~/svg/envelope-solid.svg'
// import Whatsapp from '~/svg/whatsapp-brands.svg'

export default html`
  <footer id="footer" class=${style.footer}>
    <div class=${style.logo}>
      ${unsafeHTML(favicon)}
    </div>
    <h3 class=${style.name}>
      <i>Bernardo Sunderhus</i>
    </h3>
    <!-- <p class=${style.contactMe}>Feel free to contact me</p> -->
    <div class=${style.icons}>
      <a class=${style.icon} aria-label="E-mail link" target="__blank" href="mailto:bernardo.sunderhus@gmail.com">
        ${unsafeHTML(mail)}
      </a>
      <!-- <a target="__blank" href="https://wa.me/5527992844701">
        <Whatsapp class=${style.icon}/>
      </a> -->
      <a class=${style.icon} aria-label="Github link" target="__blank" href="https://github.com/bsunderhus">
        ${unsafeHTML(github)}
      </a>
      <a class=${style.icon} aria-label="Linkedin link" target="__blank" href="https://www.linkedin.com/in/bsunderhus">
        ${unsafeHTML(linkedin)}
      </a>
      <a class=${style.icon} aria-label="Facebook icon" target="__blank" href="https://www.facebook.com/bsunderhus">
        ${unsafeHTML(facebook)}
      </a>
      <a class=${style.icon} aria-label="Instagram icon" target="__blank" href="https://www.instagram.com/bsunderhus/">
        ${unsafeHTML(instagram)}
      </a>
    </div>
  </footer>
`
