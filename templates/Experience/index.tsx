import { Section } from "components/Section";
import style from "./style.module.scss";
import { STRVEvent } from "./STRV";
import { EvologicaEvent } from "./Evologica";
import { MulticastEvent } from "./Multicast";
import { ResultateEvent } from "./Resultate";
import { BarclaysEvent } from "./Barclays";
import { MicrosoftEvent } from "./Microsoft";

export function Experience() {
	return (
		<Section className={style.section} title="Experience">
      <MicrosoftEvent/>
      <BarclaysEvent/>
			<STRVEvent/>
			<EvologicaEvent/>
			{/* <MulticastEvent/> */}
			<ResultateEvent/>
		</Section>
	)
}
