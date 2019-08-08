import '~/web-components/port-details';
import hyper from 'hyperhtml'
import {style as globals} from '~/views/app'
import lazy from '~/directives/lazy'
import cn from 'classnames'

import { PortDetails } from '~/web-components/port-details'
import { PrinterContainer } from '~/web-components/printer-container'

customElements.define('printer-container', PrinterContainer)


declare module '~/web-components/port-details' {
  interface PortDetails {
    beforePrint?: boolean
  }
}

const Section = (id: string, title: string, content?: unknown, open = false) => {
  const handleBeforePrint = (e: Event) => {
    const portDetails = e.currentTarget as PortDetails
    portDetails.beforePrint = portDetails.open
    portDetails.open = true
  } 
  const handleAfterPrint = (e: Event) => {
    const portDetails = e.currentTarget as PortDetails
    if (portDetails.beforePrint !== undefined) portDetails.open = portDetails.beforePrint
  } 
  return hyper`
    <port-details
      sticky
      id=${id}
      print-aware
      open=${open}
      class=${globals.section}
      onafterprint=${handleAfterPrint}
      onbeforeprint=${handleBeforePrint}
    >
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
}



const about = lazy(() => import(
  /* webpackChunkName: "about" */
  /* webpackPreload: true */
  '~/views/details/about'
))

const experience = lazy(() => import(
  /* webpackChunkName: "experience" */
  /* webpackPreload: true */
  '~/views/details/experience'
))

const education = lazy(() => import(
  /* webpackChunkName: "education" */
  /* webpackPreload: true */
  '~/views/details/education'
))

export default hyper`
  <printer-container scroll-top>
    ${Section(globals.about, 'About Me', about, true)}
    ${Section(globals.experience, 'Experience', experience)}
    ${Section(globals.education, 'Education', education)}
  </printer-container>
`
