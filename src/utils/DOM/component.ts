import {HTMLElementAttributes} from './attributes'

const styleSheets = new WeakMap<typeof Component, CSSStyleSheet | HTMLStyleElement>()

export interface AttributeInitializer {
  attribute: string,
  key: PropertyKey,
  initializer?: () => unknown
}

const shadows = new WeakMap<Component, ShadowRoot>()
export function hasShadow(component: Component) {
  return shadows.has(component)
}
export function getShadow(component: Component) {
  return shadows.get(component)
}

export default abstract class Component<Attributes extends {} = {}> extends HTMLElement {
  public static readonly observedAttributes: string[] = []
  public static readonly observedAttributesInitializer = new Set<AttributeInitializer>()
  public static readonly css?: string
  public static readonly shadowRootInit: ShadowRootInit = {mode: 'open'}
  public static readonly tabIndex?: number
  public static readonly role?: string
  private __attributes?: Attributes & HTMLElementAttributes<this>
  constructor () {
    super()
    attachShadow(this)
    createStyleSheet(this)
    appendStyleSheet(this)
  }
  protected connectedCallback () {
    addCSS(this)
    addRole(this)
    addTabIndex(this)
    const {observedAttributesInitializer} = this.constructor as typeof Component
    for (const attributeInitializer of observedAttributesInitializer) {
      initializeAttribute(this, attributeInitializer)
      upgradeProperty(this, attributeInitializer.key)
    }
    appendRenderization(this)
  }
  protected disconnectedCallback () {}
  protected attributeChangedCallback () {}
  protected abstract render? (): Element
}

function appendStyleSheet(component: Component) {
}

function createStyleSheet(component:Component) {
  const Constructor = component.constructor as typeof Component
  const {css} = Constructor
  if (!styleSheets.has(Constructor) && shadows.has(component)) {
    if ('adoptedStyleSheets' in ShadowRoot.prototype) {
      styleSheets.set(Constructor, new CSSStyleSheet())  
    } else {
      const styleSheet = document.createElement('style')
      styleSheet.textContent = css || ''
      styleSheets.set(Constructor, styleSheet)
    }
  }
}

function attachShadow(component: Component) {
  const {css, shadowRootInit} = component.constructor as typeof Component
  if (component['render'] || css) {
    shadows.set(component, component.attachShadow(shadowRootInit))
  }
}

function appendRenderization (component: Component) {
  if (component['render'] instanceof Function && hasShadow(component)) {
    const shadow = getShadow(component)!
    const renderization = component['render']()
    shadow.append(renderization)
  }
}


function addCSS(component:Component) {
  const Constructor = component.constructor as typeof Component
  const {css} = Constructor
  if (styleSheets.has(Constructor) && typeof css === 'string' && hasShadow(component)) {
    const styleSheet = styleSheets.get(Constructor)!
    const shadow = getShadow(component)!
    if (styleSheet instanceof CSSStyleSheet) {
      shadow.adoptedStyleSheets = [styleSheet]
      if (styleSheet.rules.length === 0) styleSheet.replaceSync(css)
    } else {
      shadow.append(styleSheet.cloneNode(true))
    }
  }
}

function addRole(component: Component) {
  const {role} = component.constructor as typeof Component
  if (!component.hasAttribute('role') && typeof role === 'string') {
    component.setAttribute('role', role)
  }
}

function addTabIndex(component:Component) {
  const {tabIndex} = component.constructor as typeof Component
  if (!component.hasAttribute('tabindex') && typeof tabIndex === 'number') {
    component.tabIndex = tabIndex
  }
}

function upgradeProperty(component: Component, key: PropertyKey) {
  if (component.hasOwnProperty(key)) {
    const value = Reflect.get(component, key)
    Reflect.deleteProperty(component, key)
    Reflect.set(component, key, value)
  }
}

function initializeAttribute(component: Component, {key, initializer, attribute}: AttributeInitializer) {
  if (initializer && !component.hasAttribute(attribute)) {
    Reflect.set(component, key, initializer())
  }
}
