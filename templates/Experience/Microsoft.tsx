import { Event } from "components/Event";
import { Link } from "components/Link";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import { SVGProps } from "react";
import style from "./style.module.scss";

export function MicrosoftEvent() {
  return (
    <Event
      className={style.sectionEvent}
      title={<h3 className={style.sectionTitle}>Senior Frontend Web Engineer</h3>}
      location={(
        <Link className={style.sectionAnchor} href="https://www.microsoft.com">
          Microsoft
        </Link>
      )}
      timestamp={<TimeStamp from="02/21" className={style.caption}/>}
    >
      <div className={style.sectionContent}>
        <Icon className={style.logo} width={150} height={150}/>
        <p className={style.text}>
          I'm working in <Link
            className={style.sectionAnchor}
            href="https://www.microsoft.com/en/microsoft-teams/group-chat-software/"
          >
            Microsoft Teams
          </Link> project.
        </p>
      </div>
    </Event>
  )
}

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 23 23" {...props}>
      <path fill="#f3f3f3" d="M0 0h23v23H0z" />
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
  )
}
