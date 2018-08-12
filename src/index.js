import './scss/style.scss'
import {MDCTabBar} from '@material/tab-bar';

const tabBar = MDCTabBar.attachTo(document.getElementById('tabs'))

// if (process.env.NODE_ENV === 'production' && navigator.serviceWorker) {
//   navigator.serviceWorker.register('sw.js')
// }
