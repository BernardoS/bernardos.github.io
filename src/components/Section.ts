
import {html} from 'lit-html'
import {style as globals} from '~/views/app'
import cn from 'classnames'


const Section = (id: string, title: string, content?: any, open = false) =>  html`
  <port-details class=${globals.section} id=${id} ?open=${open} sticky>
    <header class=${cn(globals.sectionHeader)} slot="summary">
      <h2 class=${cn(globals.uppercase, globals.sectionHeaderText)}>
        ${title}
      </h2>
    </header>
    <article class=${cn(globals.innerSection)}>
      ${content}
    </article>
  </port-details>
`
export default Section
