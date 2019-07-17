import '~/web-components/port-details'

import hyper from 'hyperhtml'
import {style as globals} from '~/views/app'
import lazy from '~/directives/lazy'
import cn from 'classnames'




const section = (id: string, title: string, content?: any, open = false) =>  hyper`
  <port-details class=${globals.section} id=${id} open=${open} sticky>
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
  ${section(globals.about, 'About Me', about, location.pathname === '/')}
  ${section(globals.experience, 'Experience', experience, location.pathname === '/experience')}
  ${section(globals.education, 'Education', education, location.pathname === '/education')}
`
