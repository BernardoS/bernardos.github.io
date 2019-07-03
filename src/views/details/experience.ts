
import cn from 'classnames'
import {style as globals} from '~/views/app'
import locals from './style.scss'
import STRVLogo from '~/images/STRV.png'
import formatDate from '~/utils/formatDate';
import { html } from 'lit-html';

export default html`
  <port-event class=${globals.event}>
    <h3 slot="title">
      Front-end Web Engineer
    </h3>
    <a rel="noopener" href="https://www.strv.com/" target="__blank" class=${globals.caption} slot="location">
      STRV
    </a>
    <highlight-text
      class=${cn(globals.caption)}
      slot="timestamp"
      text=${formatDate`< ${new Date(2018, 9)} - ${new Date()} >`}
    ></highlight-text>
    <div>
      <div class=${locals.eventContent}>
        <img
          class=${locals.strv}
          src=${STRVLogo}
          srcset=${STRVLogo}
        />
        <p>
          I'm currently working on <span class=${cn(globals.caption)}>STRV</span> as an Front-End Web Engineer. 
        </p>
        <p>
          Whether you are fortune 500 or a startup <span class=${cn(globals.caption)}>STRV</span> can help you to unlock opportunity by creating human-centered products.
        </p>
        <p>
          Some of <span class=${cn(globals.caption)}>STRV</span> collaborations have been featured on TechCrunch, Mashable or Wired; incubated in top US accelerators, or crowd-funded via Kickstarter.
        </p>
      </div>
      <port-list class=${locals.eventContent}>
        <port-list-item class=${globals.text}>
          React-Native Application development for clients across the world!
        </port-list-item>
        <port-list-item class=${globals.text}>
          Web based internal applications development with liberty to develop the best
        </port-list-item>
      </port-list>
    </div>
  </port-event>
  <port-event class=${globals.event}>
    <h3 slot="title">
      Lead Front-end Web Engineer
    </h3>
    <span class=${globals.caption} slot="location">
      Evológica
    </span>
    <highlight-text
      class=${cn(globals.caption)}
      slot="timestamp"
      text=${formatDate`< ${new Date(2016, 0)} - ${new Date(2018, 9)} >`}
    ></highlight-text>
    <div class=${locals.eventContent}>
      <p>
        Evológica is a company with expertise in the modeling, development, and support of Insurance Systems. My activities at Evológica involves:
      </p>
    </div>
    <port-list class=${locals.eventContent}>
      <port-list-item class=${globals.text}>
        Development of tools to improve communication between Curio (Evologica’s internal framework) and web applications.
      </port-list-item>
      <port-list-item class=${globals.text}>
        Mentor Front-End web development to other colleagues. With side projects to learn from HTML5, CSS and Javascript to Typescript, React, Redux, MobX, RxJS, Unstated and React’s Context <abbr title="Application Programming Interface">API</abbr>.
      </port-list-item>
      <port-list-item class=${globals.text}>
        Maintain and create robust and complete environment (production and development ready), to ensure that most developers don’t have to worry about this.
      </port-list-item>
      <port-list-item class=${globals.text}>
        As the only full time front-end of the company I was also charged with decisions in technologies and strategies for both the development of applications and the progress of the team as a whole.
      </port-list-item>
    </port-list>
  </port-event>
  <port-event class=${globals.event}>
    <h3 slot="title">
      Front-end Web Engineer
    </h3>
    <p class=${globals.caption} slot="location">
      Multicast
    </p>
    <highlight-text
      class=${cn(globals.caption)}
      slot="timestamp"
      text=${formatDate`< ${new Date(2017, 5)} - ${new Date(2018, 11)} >`}
    ></highlight-text>
    <p class=${cn(globals.text, locals.eventContent)}>
      Multicast is a young <abbr title="Internet of Things">IoT</abbr> company who provides an end-to-end solution for monitoring products, equipment, supplies, environments, etc,. My roles were:
    </p>
    <port-list class=${locals.eventContent}>
      <port-list-item class=${globals.text}>
        Develop the <abbr title="Progressive Web Application">PWA</abbr> that both user and administrator have access to interact with. Being this application robust, offline-first, mobile-first and available in all platforms (for <abbr>IOS</abbr> I had to introduce Phonegap to the project)
      </port-list-item>
      <port-list-item class=${globals.text}>
        Manage the environment used for production and development, ensuring the lightest possible application with tree shaking, code splitting and multiple modules entry points, with the help of Webpack
      </port-list-item>
    </port-list>
  </port-event>
  <port-event class=${globals.event}>
    <h3 slot="title">
      Fullstack Web Developer
    </h3>
    <a rel="noopener" href="https://www.resultate.com.br/" target="__blank" class=${cn(globals.caption)} slot="location">
      Resultate
    </a>
    <highlight-text
      class=${cn(globals.caption)}
      slot="timestamp"
      text=${formatDate`< ${new Date(2016, 2)} - ${new Date(2016, 6)} >`}
    ></highlight-text>
    <port-list class=${locals.eventContent}>
      <port-list-item class=${globals.text}>
        Worked with Wordpress to fast deliver applications
      </port-list-item>
      <port-list-item class=${globals.text}>
        Learned Laravel and other <abbr title="Hypertext Preprocessor">PHP</abbr> technologies that ensured me a good remote environment
      </port-list-item>
    </port-list>
  </port-event>
`
