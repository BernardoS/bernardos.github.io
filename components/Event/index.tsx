import clsx from "clsx";
import { ReactNode } from "react";
import style from "./style.module.scss";

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface EventProps extends Omit<DivProps, 'title'> {
	title: ReactNode
	location: ReactNode
	children: ReactNode
	timestamp: ReactNode
}

export function Event({
	title,
	children,
	location,
	timestamp,
	className,
	...rest
}: EventProps) {
	return (
		<div className={clsx(style.event, className)} {...rest}>
			<div className={style.eventTitle}>
				{title}
			</div>
			<div className={style.eventLocation}>
				{location}
			</div>
			<div className={style.eventContent}>
				{children}
			</div>
			<div className={style.eventTimestamp}>
				{timestamp}
			</div>
		</div>
	)
}
