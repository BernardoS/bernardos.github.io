import {html} from 'lit-html'
import {style as globals} from '~/views/app'
import locals from './style.scss'
import cn from 'classnames'


export default html`
  <port-details class=${globals.section} id=${globals.about} open sticky>
    <header class=${cn(globals.sectionHeader)} slot="summary">
      <h2 class=${cn(globals.uppercase, globals.sectionHeaderText)}>
        About me
      </h2>
    </header>
    <section class=${cn(globals.innerSection)} id="about">
      <div class=${cn(locals.avatar)}></div>
      <!-- <img src={avatarURL} class={cn(locals.avatar)} alt="My perfil photo"/> -->
      <p>
        Hi I'm Bernardo, I'm a Brazilian who is passionate about working with innovations.
      </p>
      <p>
        As web development is currently in the midst of a big storm of changes I see myself as a constant student, always interested and dedicated to keep up (and also improve).
      </p>
      <p>
        I love to spend time with my family, to travel and to go to the movies and I simply can't live without a decent headphone!
      </p>
    </section>
  </port-details>
`
