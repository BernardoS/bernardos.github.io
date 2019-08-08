import style from '~/views/app/style.scss'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import hyper from 'hyperhtml'
import app from '~/views/app'


OfflinePluginRuntime.install()

document.body.classList.add(style.baseTheme)
hyper(document.body)`
  ${app}
`
