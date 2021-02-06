import clsx from "clsx";
import style from "./style.module.scss";

export type AbbreviationProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Abbreviation({className, ...rest}: AbbreviationProps) {
  return (
    <abbr className={clsx(className, style.abbreviation)} {...rest}/>
  )
}
