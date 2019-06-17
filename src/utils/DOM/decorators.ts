import 'reflect-metadata'
import { isHTMLElementClass } from './helpers';
import {Component as addMixin} from './component'

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
  initializer?: Function
  extras?: Descriptor<T>[]
  finisher?: (clazz: T) => undefined | T
  descriptor: PropertyDescriptor,
  [Symbol.toStringTag]: "Descriptor"
}

type HTMLElementObserver = typeof HTMLElement & {
  observedAttributes?: string[]
  _listeners: Map<PropertyKey, [string, (boolean | AddEventListenerOptions)?]>
  _constructorListeners: Map<PropertyKey, [string, (boolean | AddEventListenerOptions)?]>
}


export const customElement = (
  name: string,
  options?: ElementDefinitionOptions
) => <T extends typeof HTMLElement>(TargetOrDescriptor: T | ClassDescriptor<T>) => {
  const define = (clazz: T) => {
    addMixin(clazz)
    customElements.define(name, clazz, options)
  } 
  if (isHTMLElementClass(TargetOrDescriptor)) return define(TargetOrDescriptor)
  if (TargetOrDescriptor.kind === 'class') {
    return {...TargetOrDescriptor, finisher: define} as unknown as T
  }
  else throw new TypeError('customElement decorator can only be applied to classes that descend HTMLElement')
}

export const attribute = (
  attribute: string,
  type: typeof String | typeof Boolean | typeof Number = String
) => <T extends HTMLElement>(
  elementOrDescriptor: T | Descriptor<HTMLElementObserver>,
  property?: string
) => {
  if (elementOrDescriptor instanceof HTMLElement) return
  const descriptor: Descriptor<HTMLElementObserver> = {
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
      clazz.observedAttributes = [
        ...(clazz.observedAttributes || []),
        attribute
      ]
      return clazz
    }
  }
  return descriptor as unknown as void
}

interface ListenOptions extends AddEventListenerOptions {
  onConstructor?: boolean
}

/**
 * adds an event listener do the Element on connection
 * and removes it on disconnection, unless onConstructor option is true.
 * In that case the event listener will be added in the Element constructor
 * and won't be removed.
 */
export const listener = (
  eventType: string,
  options?: boolean | ListenOptions
) => <T extends HTMLElement> (
  elementOrDescriptor: T | Descriptor<HTMLElementObserver>,
  property?: string
) => {
  if (elementOrDescriptor instanceof HTMLElement) return
  const descriptor: Descriptor<HTMLElementObserver> = {
    ...elementOrDescriptor,
    finisher: (clazz) => {
      if (!clazz._constructorListeners) clazz._constructorListeners = new Map()
      if (!clazz._listeners) clazz._listeners = new Map()
      if (typeof options === 'object' && options.onConstructor) {
        clazz._constructorListeners.set(elementOrDescriptor.key, [eventType, options])
      } else clazz._listeners.set(elementOrDescriptor.key, [eventType, options])
      return clazz
    }
  }
  return descriptor as unknown as void
}
