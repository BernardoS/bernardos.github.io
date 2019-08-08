import hyper from 'hyperhtml'

import locals from './style.scss'

export default hyper`
  <address class=${locals.contact}>
    <p>
      <a href="https://goo.gl/maps/ZzLXWeFKLNRTk8fs5">
        Afonso Pena, 320 - Praia da Costa <br>
        Vila Velha - ES, Brazil <br>
        29101-442 <br>
      </a>
    </p>
    <p>
      <a href="tel:+5527992844701">
        + 55 (27) 9 9284-4701
      </a>
    </p>
    <p>
      <a href="mailto:bernardo.sunderhus@gmail.com">
        bernardo.sunderhus@gmail.com
      </a>
    </p>
  </address>
`
