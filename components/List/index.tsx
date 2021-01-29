import clsx from "clsx";
import style from "./style.module.scss";


type ULProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
type LIProps = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>

export function List({className, ...rest}: ULProps) {
	return <ul className={clsx(style.portList, className)} {...rest}/>
}

export function ListItem({className, children, ...rest}: LIProps) {
	return (
		<li className={clsx(className, style.portListItem)} {...rest}>
			<span className={style.portListBullet}/>
      <span>
				{children}
      </span>
		</li>
	)
}
