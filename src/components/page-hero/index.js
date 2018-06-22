import style from './style.scss'
import * as DOM from '../../utils/DOM'

@DOM.define('page-hero')
export class PageHero extends DOM.Component {
  static observedAttributes = ['src']
  // attributeChangedCallback (name) {
  //   switch (name) {
  //     case 'src': return srcChangedCallback(this)
  //   }
  // }
  attributeChangedCallback () {
    srcChangedCallback(this)
  }
  createTemplate () {
    return <>
      <style>{style}</style>
      <header className={style.locals.header}>
        <slot/>
      </header>
    </>
  }
  get src () {
    return this.getAttribute('src')
  }
  set src (src) {
    if (src !== undefined) this.setAttribute('src', src)
    else this.removeAttribute('src')
  }
}

/**
 * 
 * @param {PageHero} element
 * @param {string} src 
 */
function srcChangedCallback (element) {
  const src = element.src
  element.shadowRoot.lastElementChild.style.backgroundImage = src === undefined
    ? undefined
    : `url(${src})`    
}
