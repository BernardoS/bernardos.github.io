import '~/web-components/port-event'
import '~/web-components/highlight-text'

import {html} from 'lit-html'
import cn from 'classnames'
import {style as globals} from '~/views/app'
import formatDate from '~/utils/formatDate'


export default html`
  <port-event class="${globals.event}">
    <h3 slot="title">
      Bachelor of Computer Science
    </h3>
    <a rel="noopener" class="${globals.caption}" target="_blank" href="http://www.ufes.br" slot="location">
      <abbr title="Universidade Federal do Espirito Santo">UFES</abbr>
    </a>
    <highlight-text
      class=${globals.caption}
      slot="timestamp"
      text="${formatDate`< ${new Date(2012, 0)} - ${new Date(2018, 6)} >`}"
    ></highlight-text>
    <p>
      Research on structural supporting the development of Situation-awareness applications based on Context-awareness concepts. Motivated by the increasing number of data to support the development of applications that are more sensible to an user.
    </p>
  </port-event>
  <port-event class="${globals.event}">
    <h3 slot="title">
      Meaningful Data and Automation
    </h3>
    <a rel="noopener" target="_blank" href="https://www.hanze.nl" class="${cn(globals.caption)}" slot="location">
      Hanze
    </a>
    <highlight-text
      class="${globals.caption}"
      slot="timestamp"
      text="${formatDate`< ${new Date(2015, 0)} - ${new Date(2016, 0)} >`}"
    ></highlight-text>
    <p>
      One year exchange experience on Netherlands sponsored by the Brazilian government with the program <abbr title="Brazil Netherlands Technology">BRANETEC</abbr>.
    </p>
    <p>
      I've learned a lot about automation and the utilization of big data in the sense of sensors and embedded systems.
    </p>
  </port-event>
`
