import {html} from 'lit-html'
import cn from 'classnames'
import {style as globals} from '~/views/app'
import formatDate from '~/utils/formatDate'


export default html`
  <port-details class=${globals.section} id=${globals.education} sticky>
    <div class=${globals.sectionHeader} slot="summary">
      <h2 class=${cn(globals.uppercase, globals.sectionHeaderText)}>
        Education
      </h2>
    </div>
    <section class=${globals.innerSection}>
      <port-event class=${globals.event}>
        <h2 class=${globals.subTitle} slot="title">
          Bachelor of Computer Science
        </h2>
        <a rel="noopener" class=${globals.caption} target="_blank" href="http://www.ufes.br" slot="location">
          UFES
        </a>
        <highlight-text
          class=${globals.caption}
          slot="timestamp"
          text=${formatDate`< ${new Date(2012, 0)} - ${new Date(2018, 6)} >`}
        ></highlight-text>
        <p class=${globals.text}>
          Research on structural supporting the development of Situation-awareness applications based on Context-awareness concepts. Motivated by the increasing number of data to support the development of applications that are more sensible to an user.
        </p>
      </port-event>
      <port-event class=${globals.event}>
        <h2 class=${globals.subTitle} slot="title">
          Meaningful Data and Automation
        </h2>
        <a rel="noopener" target="_blank" href="https://www.hanze.nl" class=${cn(globals.caption)} slot="location">
          Hanze
        </a>
        <highlight-text
          class=${globals.caption}
          slot="timestamp"
          text=${formatDate`< ${new Date(2015, 0)} - ${new Date(2016, 0)} >`}
        ></highlight-text>
        <p class=${globals.text}>
          One year exchange experience on Netherlands sponsored by the Brazilian government with the program <span class=${globals.caption}>BRANETEC</span>.
        </p>
        <p class=${globals.text}>
          I've learned a lot about automation and the utilization of big data in the sense of sensors and embedded systems.
        </p>
      </port-event>
    </section>
  </port-details>
`
