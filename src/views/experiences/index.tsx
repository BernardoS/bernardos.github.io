import * as DOM from 'DOM'
import cn from 'classnames'
import globals from '~/styles/style.scss'
import locals from './style.scss'
import STRVLogo from '~/images/STRV.png'


export default (
  <template>
    <port-details id={globals.experience} sticky>
      <div class={cn(globals.sectionHeader, globals.lightBlueColor)} slot="summary">
        <h2 class={cn(globals.uppercase)}>
          Experience
        </h2>
      </div>
      <section class={globals.innerSection} id="experiences">
        <port-event>
          <h1 class={cn(globals.subTitle)} slot="title">Front-end Web Engineer</h1>
          <a href="https://www.strv.com/" target="__blank" class={globals.caption} slot="location">STRV</a>
          <span class={globals.caption} slot="timestamp">10/18<br/>NOW</span>
          <div class={locals.eventContent}>
            <img
              class={locals.strv}
              src={STRVLogo}
              srcset={STRVLogo}
              sizes={`100px`}
            />
            <p class={globals.text}>
              I'm currently working on <span class={cn(globals.caption)}>STRV</span> as an Front-End Web Engineer. Whether you are fortune 500 or a startup <span class={cn(globals.caption)}>STRV</span> can help you to unlock opportunity by creating human-centered products. Some of <span class={cn(globals.caption)}>STRV</span> collaborations have been featured on TechCrunch, Mashable or Wired; incubated in top US accelerators, or crowd-funded via Kickstarter.
            </p>
          </div>
          <port-list class={locals.eventContent}>
            <port-list-item class={globals.text}>React-Native Application development for clients across the world!</port-list-item>
            <port-list-item class={globals.text}>Web based internal applications development with liberty to develop the best</port-list-item>
          </port-list>
        </port-event>
        <port-event>
          <h1 class={cn(globals.subTitle)} slot="title">Lead Front-end Web Engineer</h1>
          <span class={globals.caption} slot="location">Evológica</span>
          <span class={globals.caption} slot="timestamp">01/16<br/>10/18</span>
          <div class={locals.eventContent}>
            <p class={globals.text}>
              Evológica is a company with expertise in the modeling, development, and support of Insurance Systems. My activities at Evológica involves:
            </p>
          </div>
          <port-list class={locals.eventContent}>
            <port-list-item class={globals.text}>
              Development of tools to improve communication between Curio (Evologica’s internal framework) and web applications.
            </port-list-item>
            <port-list-item class={globals.text}>
              Mentor Front-End web development to other colleagues. With side projects to learn from HTML5, CSS and Javascript to Typescript, React, Redux, MobX, RxJS, Unstated and React’s Context API.
            </port-list-item>
            <port-list-item class={globals.text}>
              Maintain and create robust and complete environment (production and development ready), to ensure that most developers don’t have to worry about this.
            </port-list-item>
            <port-list-item class={globals.text}>
              As the only full time front-end of the company I was also charged with decisions in technologies and strategies for both the development of applications and the progress of the team as a whole.
            </port-list-item>
          </port-list>
        </port-event>
        <port-event>
          <h1 class={cn(globals.subTitle)} slot="title">Front-end Web Engineer</h1>
          <p class={globals.caption} slot="location">Multicast</p>
          <p class={globals.caption} slot="timestamp">06/17<br/>12/18</p>
          <p class={cn(globals.text, locals.eventContent)}>
            Multicast is a young IoT company who provides an end-to-end solution for monitoring products, equipment, supplies, environments, etc,. My roles were:
          </p>
          <port-list class={locals.eventContent}>
            <port-list-item class={globals.text}>
              Develop the PWA that both user and administrator have access to interact with. Being this application robust, offline-first, mobile-first and available in all platforms (for IOS I had to introduce Phonegap to the project)
            </port-list-item>
            <port-list-item class={globals.text}>
              Manage the environment used for production and development, ensuring the lightest possible application with tree shaking, code splitting and multiple modules entry points, with the help of Webpack
            </port-list-item>
          </port-list>
        </port-event>
        <port-event>
          <h2 class={cn(globals.subTitle)} slot="title">Fullstack Web Developer</h2>
          <a href="https://www.resultate.com.br/" target="__blank" class={cn(globals.caption)} slot="location">Resultate</a>
          <p class={globals.caption} slot="timestamp">03/16<br/>07/16</p>
          <port-list class={locals.eventContent}>
            <port-list-item class={globals.text}>
              Worked with Wordpress to fast deliver applications
            </port-list-item>
            <port-list-item class={globals.text}>
              Learned Laravel and other PHP technologies that ensured me a good remote environment
            </port-list-item>
          </port-list>
        </port-event>
      </section>
    </port-details>
  </template>
) as HTMLTemplateElement
