import variables from "data/variables.json";
import media from "data/media.json";

function InlineFonts() {
	return (
		<style jsx global >{/*css*/`
			@font-face {
				font-family: "NeutraText-Bold";
				font-display: auto;
				src:  local("NeutraText-Bold"),
							local("Neutra Text Bold"),
							local("Neutra-Text-Bold"),
							url("fonts//Neutra-Text-Bold.ttf") format("ttf"),
							url("fonts//Neutra-Text-Bold.otf") format("otf");
				font-weight: bold
			}
		`}</style>
	)
}

function InlineRoot () {
	return (
		<style jsx global>{/*css*/`
			:root {
				--space: ${variables.space};
				--max-width: ${media.maxWidth};
				--phone-max-width: ${media.phoneMaxWidth};
				--tablet-min-width: ${media.tabletMinWidth};
				--laptop-min-width: ${media.laptopMinWidth};
				--desktop-min-width: ${media.desktopMinWidth};
				--text-font-family: ${variables.textFontFamily};
				--title-font-family: ${variables.titleFontFamily};
				--title-font-weight: ${variables.titleFontWeight};
				--caption-font-family: ${variables.captionFontFamily};

				--black: ${variables.black};
				--black-50: ${variables.black50};

				--dark-blue : ${variables.darkBlue};
				--blue : ${variables.blue};
				--light-blue : ${variables.lightBlue};
				--white : ${variables.white};
				--beige : ${variables.beige};
				--coral : ${variables.coral};
			}
			@media (max-width: ${media.laptopMinWidth}) {
				:root {
					--space: ${variables.spacePhone};
				}
			}
		`}</style>
	)
}

function InlineStyle() {
	return (
		<style jsx global>{/*css*/`

			html {
				font-size: 16px;
      }

      body {
        overflow-x: hidden;
      }

			*:not(:defined) {
				display: none;
			}

			::-webkit-scrollbar-track {
				background-color: var(--white);
			}

			::-webkit-scrollbar {
				width: 6px;
				background-color: var(--dark-blue);
			}

			::-webkit-scrollbar-thumb {
				background-color: var(--dark-blue);
			}

			#__next {
				background-color: var(--white);
				color: var(--dark);
				margin: 0;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
			}
		`}</style>
	)
}


export default function InlineCSS() {
	return (
		<>
			<InlineFonts/>
			<InlineRoot/>
			<InlineStyle/>
		</>
	)
}
