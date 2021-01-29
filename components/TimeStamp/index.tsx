import clsx from "clsx";
import { useMemo } from "react";
import { DateString, formatDateString } from "utils/formatDate";
import style from "./style.module.scss";

type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export interface TimeStampProps extends SpanProps {
  from: DateString
  to?: DateString
}

function isWord(str: string) {
  return /^\w+$/.test(str)
}

export function TimeStamp({from, to = 'now', className, ...rest}: TimeStampProps) {
  const fromChars = useMemo(() => formatDateString(from).split(''), [from])
  const toChars = useMemo(() => formatDateString(to).split(''), [to])
	return (
		<>
      <span className={clsx(style.highlight, className)} {...rest}>{'('}</span>
      {fromChars.map((char, i) => (
				<span
					key={i}
					className={clsx(
						!isWord(char) && style.highlight,
						className
					)}
					{...rest}
				>
					{char}
				</span>
			))}
      <span className={clsx(style.highlight, className)} {...rest}>{' - '}</span>
      {toChars.map((char, i) => (
				<span
					key={i}
					className={clsx(
						!isWord(char) && style.highlight,
						className
					)}
					{...rest}
				>
					{char}
				</span>
			))}
      <span className={clsx(style.highlight, className)}>{')'}</span>
		</>
	)
}
