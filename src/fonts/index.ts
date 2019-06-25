import neutraTextBoldTTF from './Neutra-Text-Bold.ttf'
import style from './style.css'
import html from '~/utils/html'


export default html`
  <link rel="prefetch" as="font" href="${neutraTextBoldTTF}" crossorigin/>
  <style>
    ${style.toString()}
  </style>
`

export {default as style} from './style.css'
