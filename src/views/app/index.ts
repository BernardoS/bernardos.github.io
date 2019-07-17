import hyper from 'hyperhtml'
import style from './style.scss'
import variables from './style.json'

import header from '~/views/header'
import footer from '~/views/footer'
import details from '~/views/details'

export default hyper`
  ${header}
  <main class=${style.mainSection}>
    ${details}
  </main>
  ${footer}
`

export {style, variables}
