import {html} from 'lit-html'
import style from './style.scss'
import variables from './style.json'

import header from '~/views/header'
import footer from '~/views/footer'
import {about, education, experience} from '~/views/details'

export default html`
  ${header}
  <main class=${style.mainSection}>
    ${about}
    ${experience}
    ${education}
  </main>
  ${footer}
`

export {style, variables}
