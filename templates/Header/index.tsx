import style from './style.module.scss'

export interface HeaderProps {
	title: string
}

export function Header({title}: HeaderProps) {
	return (
		<header id="header" className={style.header}>
			<a className={style.headerLink} href="/">
				<h1 className={style.headerTitle}>{title}</h1>
			</a>
		</header>
	)
}
