import { Event } from "components/Event"
import { TimeStamp } from "components/TimeStamp";
import { Section } from "components/Section"
import style from "./style.module.scss";
import clsx from "clsx";
import { Link } from "components/Link";

export function Education() {
	return (
		<Section className={style.section} title="Education">
			<Event
				className={style.sectionEvent}
				title={<h3 className={style.sectionTitle}>Bachelor of Computer Science</h3>}
				location={
					<Link className={style.sectionAnchor} href="http://www.ufes.br">
						<abbr title="Universidade Federal do Espirito Santo">UFES</abbr>
					</Link>
				}
				timestamp={<TimeStamp from="01/12" to="07/18" className={style.caption}/>}
			>
				<p className={style.text}>
					Research on structural supporting the development of Situation-awareness
          applications based on Context-awareness concepts.
          Motivated by the increasing number of data to support the development of applications
          that are more sensible to an user.
				</p>
			</Event>
			<Event
			 	className={style.sectionEvent}
				title={<h3 className={style.sectionTitle}>Meaningful Data and Automation</h3>}
				location={(
					<Link href="https://www.hanze.nl" className={style.sectionAnchor} >
						Hanze
					</Link>
				)}
				timestamp={<TimeStamp from="01/15" to="01/16" className={style.caption}/>}
			>
				<p className={style.text}>
					One year exchange experience on Netherlands sponsored by the Brazilian government with
          the program <abbr className={style.abbreviation} title="Brazil Netherlands Technology">BRANETEC</abbr>.
				</p>
				<p className={style.text}>
					I've learned a lot about automation and the utilization of big data in the sense
          of sensors and embedded systems.
				</p>
			</Event>
		</Section>
	)
}
