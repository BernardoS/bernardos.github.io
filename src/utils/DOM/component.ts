export type AddEventListenerParams = [string, (boolean | AddEventListenerOptions)?]

export function Component<C extends typeof HTMLElement> (Constructor: C) {
  const Proto: new (...args: any[]) => HTMLElement = Object.getPrototypeOf(Constructor)
  if (HTMLElement !== Proto && !HTMLElement.isPrototypeOf(Proto)) return
  class WebComponent extends Proto {
    public static readonly template?: HTMLElement
    public static readonly css?: string
    public static readonly _listeners: Map<PropertyKey, AddEventListenerParams> = (
      (Constructor as any)._listeners || new Map()
    )
    public static readonly _constructorListeners: Map<PropertyKey, AddEventListenerParams> = (
      (Constructor as any)._constructorListeners ||new Map()
    )
    public static _style?: CSSStyleSheet
    protected readonly _shadow!: ShadowRoot
    constructor (...args: any[]) {
      super(...args)
      const WCConstructor = this.constructor as typeof WebComponent
      const {template, css} = this.constructor as typeof WebComponent
      if (template || css) {
        this.attachShadow({mode: 'open'})
        this._shadow = this.shadowRoot!
      }
      if (template instanceof HTMLTemplateElement) {
        this._shadow.append(template.content.cloneNode(true))
      }
      if (!WCConstructor._style && 'adoptedStyleSheets' in ShadowRoot.prototype) {
        WCConstructor._style = new CSSStyleSheet()
      }
      if (css) {
        if (WCConstructor._style) {
          this._shadow.adoptedStyleSheets = [WCConstructor._style]
        } else {
          const style = document.createElement('style')
          style.textContent = css
          this._shadow.append(style)
        }
      }
      for (const listener of this._constructorListeners) {
        this.addEventListener(...listener)
      }
    }
    protected attributeChangedCallback (
      name: string,
      previousValue: string | null,
      value: string | null
    ) {
      const event = new ChangeAttributeEvent(`dom-attr-change:${name}`, previousValue, value, {bubbles: false, cancelable: false})
      this.dispatchEvent(event)
    }
    protected connectedCallback () {
      const {css, _style} = this.constructor as typeof WebComponent
      if (typeof css === 'string' && _style instanceof CSSStyleSheet && _style.cssRules.length == 0) {
        _style.replaceSync(css)
      }
      for (const listener of this._listeners) {
        this.addEventListener(...listener)
      }
      this.dispatchEvent(new Event('dom-connected', {bubbles: false, cancelable: false}))
    }
    protected disconnectedCallback () {
      this.dispatchEvent(new Event('dom-disconnected', {bubbles: false, cancelable: false}))
      for (const listener of this._listeners) {
        this.removeEventListener(...listener)
      }
    }
    private _listeners = Array.from((WebComponent._listeners).entries())
    .reduce<Parameters<HTMLElement['addEventListener']>[]>((acc, [propertyKey, [eventType, options]]) => {
      const listener: unknown = (this as any)[propertyKey]
      if (listener instanceof Function) {
        acc.push([
          eventType,
          listener as (this: this, ev: Event) => void,
          options
        ])
      }
      return acc
    }, [])
    private _constructorListeners = Array.from((WebComponent._constructorListeners).entries())
    .reduce<Parameters<HTMLElement['addEventListener']>[]>((acc, [propertyKey, [eventType, options]]) => {
      const listener: unknown = (this as any)[propertyKey]
      if (listener instanceof Function) {
        acc.push([
          eventType,
          listener as (this: this, ev: Event) => void,
          options
        ])
      }
      return acc
    }, [])
  }
  Object.setPrototypeOf(Constructor.prototype, WebComponent.prototype)
  Object.setPrototypeOf(Constructor, WebComponent)
}


export class ChangeAttributeEvent extends Event {
  constructor (
    type: string,
    public readonly previousValue: string | null,
    public readonly value: string | null,
    init?: EventInit
  ) {
    super(type, init)
  }
}
