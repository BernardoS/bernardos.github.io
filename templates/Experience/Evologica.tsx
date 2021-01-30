import clsx from "clsx";
import { Event } from "components/Event";
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
          Mentor Front-End web development to other colleagues. With side projects to learn from HTML5, CSS and Javascript to Typescript, React, Redux, MobX, RxJS, Unstated and React’s Context <abbr className={style.abbreviation} title="Application Programming Interface">API</abbr>.
        </ListItem>
        <ListItem className={style.text}>
          Maintain and create robust and complete environment (production and development ready), to ensure that most developers don’t have to worry about this.
        </ListItem>
        <ListItem className={style.text}>
          As the only full time front-end of the company I was also charged with decisions in technologies and strategies for both the development of applications and the progress of the team as a whole.
        </ListItem>
      </List>
    </Event>
  )
}
