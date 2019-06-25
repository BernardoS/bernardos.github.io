import {html} from 'lit-html'
import style from './style.scss'

export default html`
  <header id="header" class=${style.header}>
    <h1>BSunderhus</h1>
  </header>
`

// export default (document.getElementById('header') || (
//   <header id="header" class={cn(style.header)}>
//     <h1>
//       BSunderhus
//     </h1>
//   </header>
// )) as HTMLElement

export {default as style} from './style.scss'
