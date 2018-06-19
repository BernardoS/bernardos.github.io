import style from './style.scss'
import * as DOM from '../../utils/DOM'


const _srcs = new WeakMap()

@DOM.define('my-hero')
export class MyHero extends DOM.Component {
  static observedAttributes = ['src']
  attributeChangedCallback (name, oldValue, newValue) {
    this[name] = newValue
  }
  createTemplate () {
    return <>
      <link href={style} rel="stylesheet"/>
      <header>
        <slot/>
      </header>
    </>
  }
  get src () {
    return _srcs.get(this)
  }
  set src (src) {
    _srcs.set(this, src)
    this.shadowRoot.lastElementChild.style.backgroundImage = `url(${src})`    
  }
}
