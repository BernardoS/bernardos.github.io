import clsx from "clsx";
import style from './style.module.scss'
import { ReactNode, SyntheticEvent } from "react";

type DetailsProps = React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLElement>, HTMLElement>

function handleToggle(ev: SyntheticEvent<HTMLDetailsElement>) {
	const element = ev.currentTarget
	if (element.open) {
		requestAnimationFrame(() => (
			element.scrollIntoView({behavior: 'smooth'})
		))
	}
}

export interface SectionProps extends Omit<DetailsProps, 'title'> {
	title: ReactNode
	children: ReactNode
	summaryClassName?: string
	titleClassName?: string
	contentClassName?: string
}

export function Section({
	title,
	children,
	className,
	summaryClassName,
	titleClassName,
	contentClassName,
	...rest
}: SectionProps) {
	return (
		<details
			onToggle={handleToggle}
			className={clsx(style.section, className)}
			{...rest}
		>
			<summary className={clsx(style.sectionSummary, summaryClassName)}>
				<h2 className={clsx(style.sectionTitle, titleClassName)}>{title}</h2>
			</summary>
			<article className={clsx(style.sectionContent, contentClassName)}>
				{children}
			</article>
		</details>
	)
}
