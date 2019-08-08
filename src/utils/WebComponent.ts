export default class WebComponent extends HTMLElement {
  public static readonly template?: HTMLTemplateElement
  public static readonly tabIndex?: number
  public static readonly role?: string

  public static createRoot(element: Element): ShadowRoot | Element {
    return element.attachShadow({mode: 'open'})
  }
  constructor () {
    super()
    const {template, createRoot} = this.constructor as typeof WebComponent
    if (template instanceof HTMLTemplateElement) {
      const root = createRoot(this)
      root.append(template.content.cloneNode(true))
    }
  }
  public connectedCallback () {
    addRole(this)
    addTabIndex(this)
  }
}

function addRole(component: WebComponent) {
  const {role} = component.constructor as typeof WebComponent
  if (!component.hasAttribute('role') && typeof role === 'string') {
    component.setAttribute('role', role)
  }
}

function addTabIndex(component: WebComponent) {
  const {tabIndex} = component.constructor as typeof WebComponent
  if (!component.hasAttribute('tabindex') && typeof tabIndex === 'number') {
    component.tabIndex = tabIndex
  }
}
