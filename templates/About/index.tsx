import { Section } from 'components/Section'
import style from "./style.module.scss";


export function About() {
	return (
		<Section open title="About Me" summaryClassName={style.sectionSummary} className={style.section}>
			<div className={style.sectionAvatar}/>
			<p className={style.sectionParagraph}>
				Hi I'm Bernardo, I'm a Brazilian who is passionate about working with innovations.
			</p>
			<p className={style.sectionParagraph}>
				As web development is currently in the midst of a big storm of changes I see myself as a constant student,
				always interested, dedicated to keep up and improve.
			</p>
			<p className={style.sectionParagraph}>
				I love to spend time with my family, travel,
				go to the movies and I simply can't live without a decent headphone!
			</p>
		</Section>
	)
}
