import clsx from "clsx";
import { Event } from "components/Event";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import style from "./style.module.scss";

export function MulticastEvent() {
  return (
    <Event
      className={style.sectionEvent}
      title={<h3 className={style.sectionTitle}>Front-end Web Engineer</h3>}
      location={<p className={clsx(style.caption, style.sectionAnchor)}>Multicast</p>}
      timestamp={<TimeStamp from="06/17" to="12/18" className={style.caption}/>}
    >
      <p className={clsx(style.text, style.sectionContent)}>
        Multicast is a young <abbr className={style.abbreviation} title="Internet of Things">IoT</abbr> company who provides an end-to-end solution for monitoring products, equipment, supplies, environments, etc,. My roles were:
      </p>
      <List className={style.sectionContent}>
        <ListItem className={style.text}>
          Develop the <abbr className={style.abbreviation} title="Progressive Web Application">PWA</abbr> that both user and administrator have access to interact with. Being this application robust, offline-first, mobile-first and available in all platforms (for <abbr className={style.abbreviation}>IOS</abbr> I had to introduce Phonegap to the project)
        </ListItem>
        <ListItem className={style.text}>
          Manage the environment used for production and development, ensuring the lightest possible application with tree shaking, code splitting and multiple modules entry points, with the help of Webpack
        </ListItem>
      </List>
    </Event>
  )
}
