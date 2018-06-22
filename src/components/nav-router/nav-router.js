import * as DOM from '../../utils/DOM'
import { createBrowserHistory } from "history/es"

@DOM.define('nav-router')
export default class NavRouter extends DOM.Component {
  constructor () {
    super()
    this.history = createBrowserHistory({
      basename: this.basename || '',
      forceRefresh: this.forceRefresh || false,
      keyLength: this.keyLength || 6,
      getUserConfirmation: this.getUserConfirmation
    })
  }
  connectedCallback () {
    this.addEventListener('click', handleAnchorClick)
  }
  get basename () {
    return this.getAttribute('basename')
  }
  set basename (basename) {
    this.setAttribute('basename', basename)
  }
  get forceRefresh () {
    return this.hasAttribute('force-refresh')
  }
  set forceRefresh (forceRefresh) {
    if (forceRefresh) this.setAttribute('force-refresh', '')
    else this.removeAttribute('force-refresh')
  }
  get keyLength () {
    return Number(this.getAttribute('key-length'))
  }
  set keyLength (keyLength) {
    this.setAttribute('key-length', keyLength)
  }
  /**
   * A function to use to confirm navigation with the user (see below)
   * @param {string} message
   * @param {Function} callback
   */
  getUserConfirmation (message, callback) {
    callback(window.confirm(message))
  }
}

/**
 * handles anchor clicks
 * @param {MouseEvent} event
 */
function handleAnchorClick(event) {
  /** @type {NavRouter} */
  const router = event.currentTarget
  /** @type {HTMLAnchorElement} */
  const anchor = event.path.find(n => n instanceof HTMLAnchorElement)
  if (anchor && anchor.origin === location.origin) {
    event.preventDefault()
    router.history.push(anchor.pathname)
  }
}
