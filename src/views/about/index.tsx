import * as DOM from 'DOM'
import globals from '~/styles/style.scss'
import locals from './style.scss'
import cn from 'classnames'
import avatarURL from '~/images/avatar.png'


export default (
  <template>
    <port-details id={globals.about} open sticky>
      <div class={cn(globals.sectionHeader, globals.blueColor)} slot="summary">
        <h2 class={cn(globals.uppercase)}>
          About me
        </h2>
        <div/>
      </div>
      <section class={cn(locals.section, globals.innerSection)} id="about">
        <img
          src={avatarURL}
          class={cn(locals.avatar)}
          alt="My perfil photo"
        />
        <p class={cn(globals.text)}>
          Hi I'm Bernardo, I'm a Brazilian who is passionate about working with innovations. As web development is currently in the midst of a big storm of changes I see myself as a constant student, always interested and dedicated to keep up (and also improve). I love to spend time with my family, to travel and to go to the movies and I simply can't live without a decent headphone!
        </p>
        {/* <port-list class={style.list}>
          <port-list-item class={globals.text}>
            <highlight-text value="Typescript & Javascript"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="React & React-Native"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="Apollo & GraphQL"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="P•W•A"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="Elm architecture"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="Observer pattern"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="S•O•L•I•D"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="K•I•S•S"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="Y•A•G•N•I"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="Webpack & Rollup & Gulp"/>
          </port-list-item>
          <port-list-item class={globals.text}>
            <highlight-text value="Web Components"/>
          </port-list-item>
        </port-list> */}
      </section>
    </port-details>
  </template>
) as HTMLTemplateElement
