import { Event } from "components/Event";
import { Link } from "components/Link";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import style from "./style.module.scss";

export function ResultateEvent() {
  return (
    <Event
      className={style.sectionEvent}
      title={<h3 className={style.sectionTitle}>Fullstack Web Developer</h3>}
      location={(
        <Link className={style.sectionAnchor} href="https://www.resultate.com.br/">
          Resultate
        </Link>
      )}
      timestamp={<TimeStamp from="03/16" to="07/16" className={style.caption}/>}
    >
      <List className={style.sectionContent}>
        <ListItem className={style.text}>
          Worked with Wordpress to fast deliver applications
        </ListItem>
        <ListItem className={style.text}>
          Learned Laravel and other <abbr className={style.abbreviation} title="Hypertext Preprocessor">PHP</abbr> technologies that ensured me a good remote environment
        </ListItem>
      </List>
    </Event>
  )
}
