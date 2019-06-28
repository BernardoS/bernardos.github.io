import {render} from 'lit-html'
import app, {style} from '~/views/app'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
OfflinePluginRuntime.install()


document.body.classList.add(style.baseTheme)
render(app, document.body)
