import clsx from "clsx";
import { Event } from "components/Event";
import { Section } from "components/Section";
import style from "./style.module.scss";
import { List, ListItem } from "components/List";
import { TimeStamp } from "components/TimeStamp";
import { Link } from "components/Link";

function STRV() {
  return <span className={style.caption}>STRV</span>
}

export function Experience() {
	return (
		<Section className={style.section} title="Experience">
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
							 className={style.strv}
							 width={150}
							 height={150}
							 src="/images/STRV.png"
						/>
						<p className={style.text}>
							I'm currently working on <STRV/> as an Front-End Web Engineer.
						</p>
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
		</Section>
	)
}
