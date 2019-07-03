import Section from '~/components/Section'
import {html} from 'lit-html'
import {style as globals} from '~/views/app'
import lazy from '~/directives/lazy'
import about from './about'

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

export default html`
  ${Section(globals.about, 'About Me', about, true)}
  ${Section(globals.experience, 'Experience', experience)}
  ${Section(globals.education, 'Education', education)}
`
