import HyperElement from './element'

interface ClassDescriptor<T> {
  kind: 'class'
  elements: Descriptor<T>[];
  finisher?: (clazz: T) => undefined | T,
  [Symbol.toStringTag]: "Descriptor"
}

// From the TC39 Decorators proposal
interface Descriptor<T> {
  kind: 'field' | 'method' 
  key: PropertyKey
  placement: 'static'|'prototype'|'own'
  initializer?: () => unknown
  extras?: Descriptor<T>[]
  finisher?: (clazz: T) => undefined | T
  descriptor: PropertyDescriptor,
  [Symbol.toStringTag]: "Descriptor"
}


export const customElement = (
  name: string,
  options?: ElementDefinitionOptions
) => <T extends typeof HTMLElement>(TargetOrDescriptor: T | ClassDescriptor<T>) => {
  const define = (clazz: T) => {
    customElements.define(name, clazz, options)
  }
  if (TargetOrDescriptor instanceof Function) return define(TargetOrDescriptor)
  if (TargetOrDescriptor.kind === 'class') {
    return {...TargetOrDescriptor, finisher: define} as unknown as T
  }
  else throw new TypeError('customElement decorator can only be applied to classes that descend HTMLElement')
}

export const attribute = (
  attribute: string,
  type: (typeof String | typeof Boolean | typeof Number) = String
) => <T extends HTMLElement>(
  elementOrDescriptor: T | Descriptor<typeof HyperElement>,
  property?: string
) => {
  if (elementOrDescriptor instanceof HTMLElement) return
  const descriptor: Descriptor<typeof HyperElement> = {
    ...elementOrDescriptor,
    placement: 'prototype',
    kind: 'method',
    descriptor: {
      get (this: T) {
        if (type === String) return this.getAttribute(attribute)
        if (type === Number) return Number(this.getAttribute(attribute))
        if (type === Boolean) return this.hasAttribute(attribute)
      },
      set (this: T, value: unknown) {
        switch (type) {
          case String: {
            if (typeof value === 'string') {
              return this.setAttribute(attribute, value)
            }
            throw new TypeError(`This property only accepts string as value, instead got ${typeof value}`)
          }
          case Number: {
            if (typeof value === 'number') {
              return this.setAttribute(attribute, value.toString())
            }
            throw new TypeError(`This property only accepts number as value, instead got ${typeof value}`)
          }
          case Boolean: {
            this.toggleAttribute(attribute, Boolean(value))
            return
          }
          default: {
            if (typeof value === 'undefined') {
              return this.removeAttribute(attribute)
            }
          }
        }
      }
    },
    initializer: undefined,
    finisher: (clazz) => {
      clazz.observedAttributesInitializer.add({
        ...elementOrDescriptor,
        attribute,
      })
      const observedAttributes = clazz.observedAttributes
      Object.defineProperty(clazz, 'observedAttributes', {
        configurable: true,
        value: [...observedAttributes, attribute]
      })
      return clazz
    }
  }
  return descriptor as unknown as void
}
