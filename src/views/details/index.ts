import Section from '~/components/Section'
import {html} from 'lit-html'
import {style as globals} from '~/views/app'
import lazy from '~/directives/lazy'


const about = lazy(() => import(
  /* webpackChunkName: "about" */
  /* webpackPreload: true */
  '~/views/details/about'
), {disabled: window.__PRERENDER_INJECTED && location.pathname !== '/'})

const experience = lazy(() => import(
  /* webpackChunkName: "experience" */
  /* webpackPreload: true */
  '~/views/details/experience'
), {disabled: window.__PRERENDER_INJECTED && location.pathname !== '/experience'})

const education = lazy(() => import(
  /* webpackChunkName: "education" */
  /* webpackPreload: true */
  '~/views/details/education'
), {disabled: window.__PRERENDER_INJECTED && location.pathname !== '/education'})

export default html`
  ${Section(globals.about, 'About Me', about, location.pathname === '/')}
  ${Section(globals.experience, 'Experience', experience, location.pathname === '/experience')}
  ${Section(globals.education, 'Education', education, location.pathname === '/education')}
`
