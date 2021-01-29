import { Facebook } from "components/Icons/Facebook";
import { Favicon } from "components/Icons/Favicon";
import { Github } from "components/Icons/Github";
import { Instagram } from "components/Icons/Instagram";
import { Linkedin } from "components/Icons/Linkedin";
import { Mail } from "components/Icons/Mail";
import style from "./style.module.scss";

export interface FooterProps {
	title: string
}

export function Footer ({title}: FooterProps) {
	return (
		<footer id="footer" className={style.footer}>
			<div className={style.logo}>
				<Favicon/>
			</div>
			<h3 className={style.name}>
				<i>{title}</i>
			</h3>
			<div className={style.icons}>
				<a className={style.icon} aria-label="E-mail link" target="__blank" href="mailto:bernardo.sunderhus@gmail.com">
					<Mail/>
				</a>
				<a className={style.icon} aria-label="Github link" target="__blank" href="https://github.com/bsunderhus">
					<Github/>
				</a>
				<a className={style.icon} aria-label="Linkedin link" target="__blank" href="https://www.linkedin.com/in/bsunderhus">
					<Linkedin/>
				</a>
				<a className={style.icon} aria-label="Facebook icon" target="__blank" href="https://www.facebook.com/bsunderhus">
					<Facebook/>
				</a>
				<a className={style.icon} aria-label="Instagram icon" target="__blank" href="https://www.instagram.com/bsunderhus/">
					<Instagram/>
				</a>
			</div>
		</footer>
	)
}
