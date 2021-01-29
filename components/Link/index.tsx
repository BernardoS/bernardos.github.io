import clsx from "clsx";
import {DetailedHTMLProps, AnchorHTMLAttributes} from "react";
import style from "./style.module.scss";

type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export function Link({className, ...props}: LinkProps) {
  return <a
    rel="noopener"
    target="__blank"
    className={clsx(className, style.link)}
    {...props}
  />
}
