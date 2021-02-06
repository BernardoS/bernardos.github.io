import clsx from "clsx";
import { Abbreviation } from "components/Abbreviation";
import { Event } from "components/Event";
import { Link } from "components/Link";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import style from "./style.module.scss";

export function EvologicaEvent() {
  return (
    <Event
      className={style.sectionEvent}
      title={<h3 className={style.sectionTitle}>Lead Front-end Web Engineer</h3>}
      location={(
        <span className={clsx(style.caption, style.sectionAnchor)}>Evológica</span>
      )}
      timestamp={<TimeStamp from="01/16" to="10/18" className={style.caption}/>}
    >
      <div className={style.sectionContent}>
        <p className={style.text}>
          Evológica is a company with expertise in the modeling, development, and support of Insurance Systems. My activities at Evológica involves:
        </p>
      </div>
      <List className={style.sectionContent}>
        <ListItem className={style.text}>
          Development of tools to improve communication between Curio (Evologica’s internal framework) and web applications.
        </ListItem>
        <ListItem className={style.text}>
          Mentor Front-End web development to other colleagues.
          With side projects to learn from <Abbreviation title="Hyper Text Markup Language version 5">HTML5</Abbreviation>,
          {' '}<Abbreviation title="Cascading Style Sheets">CSS</Abbreviation>,
          {' '}<Abbreviation title="Javascript">JS</Abbreviation> to
          {' '}<Abbreviation title="Typescript">TS</Abbreviation>,
          {' '}<Link className={style.sectionAnchor} href="https://reactjs.org">React</Link>,
          {' '}<Link className={style.sectionAnchor} href="https://redux.js.org">Redux</Link>,
          {' '}<Link className={style.sectionAnchor} href="https://mobx.js.org">MobX</Link>,
          {' '}<Link className={style.sectionAnchor} href="https://rxjs-dev.firebaseapp.com">RxJS</Link>,
          {' '}<Link className={style.sectionAnchor} href="https://github.com/jamiebuilds/unstated">Unstated</Link> and
          {' '}<Link className={style.sectionAnchor} href="https://reactjs.org/docs/context">React Context</Link>
          {' '}<Abbreviation title="Application Programming Interface">API</Abbreviation>.
        </ListItem>
        <ListItem className={style.text}>
          Maintain and create robust and complete environment (production and development ready), to ensure that most developers don’t have to worry about this.
        </ListItem>
        <ListItem className={style.text}>
          As the only full time front-end of the company I was also charged with decisions in technologies and strategies
          for both the development of applications and the progress of the team as a whole.
        </ListItem>
      </List>
    </Event>
  )
}
