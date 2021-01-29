import Head from 'next/head'
import meta from "data/meta.json";
import variables from "data/variables.json";
import style from "./style.module.scss";
import InlineCSS from 'styles/Inline';

import { Header } from 'templates/Header';
import { Footer } from 'templates/Footer';
import { About } from 'templates/About';
import { Education } from 'templates/Education';
import { Experience } from 'templates/Experience';

export default function Index() {
	return (
		<>
			<Head>
				<title>{meta.name}</title>
				<meta name="Description" content={meta.description}/>
        <meta property="og:title" content={meta.name}/>
        <meta property="og:description" content={meta.description}/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="msapplication-TileColor" content={variables.darkBlue}/>
        <meta name="theme-color" content={variables.darkBlue}/>
        <meta name="mobile-web-app-capable" content="yes"/>
				<link rel="icon" href="images/favicon-48x48.png" type="image/png" sizes="48x48" />
				<link rel="icon" href="images/favicon-16x16.png" type="image/png" sizes="16x16" />
				<link rel="icon" href="images/favicon-32x32.png" type="image/png" sizes="32x32" />
				<link rel="apple-touch-icon" href="images/apple-touch-icon.png" type="image/png" sizes="180x180" />
			</Head>
			<InlineCSS/>
			<Header title={meta.nickname}/>
			<main className={style.main}>
				<About/>
				<Experience/>
				<Education/>
			</main>
			<Footer title={meta.name}/>
		</>
	)
}
