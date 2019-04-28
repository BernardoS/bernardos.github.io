
export const customElement = (
  name: string,
  options?: ElementDefinitionOptions
) => <T extends typeof HTMLElement>(Target: T) => {
  if (Object.getPrototypeOf(HTMLElement).isPrototypeOf(Object.getPrototypeOf(Target))) {
    customElements.define(name, Target, options)
    return Target
  }
  else throw new TypeError('define decorator can only be applied to classes that descend HTMLElement')
}
