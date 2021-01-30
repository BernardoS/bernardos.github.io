import { Event } from "components/Event";
import { Link } from "components/Link";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import style from "./style.module.scss";

export function STRVEvent() {
  return (
    <Event
				className={style.sectionEvent}
				title={<h3 className={style.sectionTitle}>Front-end Web Engineer</h3>}
				location={(
          <Link className={style.sectionAnchor} href="https://www.strv.com/">
            <STRV/>
          </Link>
				)}
				timestamp={<TimeStamp from="10/18" to="08/20" className={style.caption}/>}
			>
				<div>
					<div className={style.sectionContent}>
						<img
							 className={style.logo}
							 width={150}
							 height={150}
							 src="/images/STRV.png"
						/>
						<p className={style.text}>
							Whether you are fortune 500 or a startup <STRV/> can help you
              to unlock opportunity by creating human-centered products.
						</p>
						<p className={style.text}>
							Some of <STRV/> collaborations have been featured on TechCrunch, Mashable or Wired;
              incubated in top US accelerators, or crowd-funded via Kickstarter.
						</p>
					</div>
					<List className={style.sectionContent}>
					<ListItem className={style.text}>
							React + Apollo Application for internal <Link className={style.sectionAnchor} href="https://github.com/strvcom/dep-manager-web">dependency management</Link>
						</ListItem>
						<ListItem className={style.text}>
							React-Native E-Commerce Application development for <Link className={style.sectionAnchor} href="https://www.ecomi.com/">Ecomi</Link>
						</ListItem>
						<ListItem className={style.text}>
							Support and refactoring for Apollo of E-Commerce application on React + Redux for <Link className={style.sectionAnchor} href="https://www.medmen.com/">Medmen</Link>
						</ListItem>
						<ListItem className={style.text}>
							What's new on TS 3+
              {' '}
              <Link className={style.sectionAnchor} href="https://drive.google.com/file/d/1xxLDEpLefg7ITsnvzg9e9nroXkDuesFp/view?usp=sharing">Talk</Link>
              {' & '}
              <Link
                className={style.sectionAnchor}
                href="https://docs.google.com/presentation/d/1pknzzFsoG7Ntz5u1u56iX4PpNdFuXHoW1QgsSULSIvM/edit?usp=sharing"
              >Slides</Link>
						</ListItem>
						<ListItem className={style.text}>
							Web Components: What, why, how?
              {' '}
              <Link
                className={style.sectionAnchor}
                href="https://drive.google.com/file/d/1L2BQbMVJ9QPizK17NDn05EedtNbGYRto/view?usp=sharing"
              >Talk</Link>
              {' & '}
              <Link
                className={style.sectionAnchor}
                href="https://docs.google.com/presentation/d/1AurUgH80KicpMpzOsvlPY75WEkEVk8yrx5ptlR6Q5RY/edit?usp=sharing"
              >Slides</Link>
						</ListItem>
						<ListItem className={style.text}>
							Currently working on internal projects based on React + Apollo
						</ListItem>
					</List>
				</div>
			</Event>
  )
}

export function STRV() {
  return <span className={style.caption}>STRV</span>
}
