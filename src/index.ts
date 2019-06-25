import {render} from 'lit-html'
import app, {style} from '~/views/app'


document.body.classList.add(style.baseTheme)
render(app, document.body)
