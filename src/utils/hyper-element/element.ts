import {bind, wire, BoundTemplateFunction, WiredTemplateFunction} from 'hyperhtml'


export interface AttributeInitializer {
  attribute: string,
  key: PropertyKey,
  initializer?: () => unknown
}

/**
 * reference to the root of each HyperElement
 */
const roots = new WeakMap<HyperElement, ShadowRoot | HyperElement>()
/**
 * reference to the handle that indicates if first render has already happened
 */
const firstRenderHandles = new WeakMap<HyperElement, number>()

/**
 * small polyfill for the **requestIdleCallback** functionality
 */
if (!window.requestIdleCallback) {
  window.requestIdleCallback = (cb) => setTimeout(cb, 0)
  window.cancelIdleCallback = (handle) => clearTimeout(handle)
}

export default abstract class HyperElement extends HTMLElement {
  public static readonly observedAttributes: string[] = []
  public static readonly observedAttributesInitializer = new Set<AttributeInitializer>()
  public static readonly css: string | null = null
  public static styleSheet?: CSSStyleSheet | HTMLStyleElement
  public static readonly shadowRootInit: ShadowRootInit = {mode: 'open'}
  public static readonly tabIndex?: number
  public static readonly role?: string
  /**
   * creates the root that the methods _html_ and _wire_ refer to
   * by default the this function will create a shadow root
   * using as argument the value provided on _Constructor.shadowRootInit
   * @param element the element
   */
  public static createRoot<Element extends HyperElement>(element: Element): ShadowRoot | Element {
    const {shadowRootInit} = this
    return element.attachShadow(shadowRootInit)
  }
  public html: BoundTemplateFunction<HyperElement | ShadowRoot>
  public wire: (type_id: string) => WiredTemplateFunction
  constructor () {
    super()
    const constructor = this.constructor as typeof HyperElement
    roots.set(this, constructor.createRoot(this))
    this.html = createHTML(this)
    this.wire = createWire(this)
    if (!constructor.styleSheet) createStyleSheet(constructor)
    /**
     * render as soon as event loop is idle
     * ensuring that the element **synchronous** construction is over before rendering
     */
    firstRenderHandles.set(this, requestIdleCallback(() => firstRender(this)))
  }
  protected connectedCallback () {
    const constructor = this.constructor as typeof HyperElement
    addRole(this)
    addTabIndex(this)
    addCSSStyleSheet(this)
    for (const attributeInitializer of constructor.observedAttributesInitializer) {
      initializeAttribute(this, attributeInitializer)
      upgradeProperty(this, attributeInitializer.key)
    }
    /**
     * if by any reason the rendering hasn't happened yet, then render it
     */
    firstRender(this)
  }
  protected disconnectedCallback () {}
  protected attributeChangedCallback () {
    if (!firstRenderHandles.has(this) && this.render instanceof Function) {
      this.render()
    }
  }
  public abstract render? (): void
}


function createHTML(component: HyperElement) {
  const root = roots.get(component)!
  const html = bind(root)
  return (template: TemplateStringsArray, ...values: any[]) => {
    const result = html(template, ...values)
    addStyleElement(component)
    return result
  }
}

function createWire(component: HyperElement) {
  const root = roots.get(component)!
  return (type_id: string) => wire(root, type_id)
}

function createStyleSheet(constructor: typeof HyperElement) {
  if ('adoptedStyleSheets' in ShadowRoot.prototype) {
    constructor.styleSheet = new CSSStyleSheet()
  } else {
    constructor.styleSheet = document.createElement('style')
    constructor.styleSheet.textContent = constructor.css
  }
}


function addCSSStyleSheet(component: HyperElement) {
  const {css, styleSheet} = component.constructor as typeof HyperElement
  const root = roots.get(component)
  if (styleSheet && css && root instanceof ShadowRoot) {
    if (styleSheet instanceof CSSStyleSheet) {
      root.adoptedStyleSheets = [styleSheet]
      if (styleSheet.rules.length === 0) styleSheet.replaceSync(css)
    }
  }
}

function addStyleElement(component: HyperElement) {
  const {styleSheet} = component.constructor as typeof HyperElement
  const root = roots.get(component)
  if (styleSheet instanceof HTMLStyleElement && root instanceof ShadowRoot) {
    root.appendChild(styleSheet.cloneNode(true))
  }
}

function addRole(component: HyperElement) {
  const {role} = component.constructor as typeof HyperElement
  if (!component.hasAttribute('role') && typeof role === 'string') {
    component.setAttribute('role', role)
  }
}

function addTabIndex(component: HyperElement) {
  const {tabIndex} = component.constructor as typeof HyperElement
  if (!component.hasAttribute('tabindex') && typeof tabIndex === 'number') {
    component.tabIndex = tabIndex
  }
}

function upgradeProperty(component: HyperElement, key: PropertyKey) {
  if (component.hasOwnProperty(key)) {
    const value = Reflect.get(component, key)
    Reflect.deleteProperty(component, key)
    Reflect.set(component, key, value)
  }
}

function initializeAttribute(component: HyperElement, {key, initializer, attribute}: AttributeInitializer) {
  if (initializer && !component.hasAttribute(attribute)) {
    Reflect.set(component, key, initializer())
  }
}


function firstRender (element: HyperElement) {
  if (firstRenderHandles.has(element)) {
    cancelIdleCallback(firstRenderHandles.get(element)!)
    firstRenderHandles.delete(element)
    if (element.render instanceof Function) element.render()
  }
}
