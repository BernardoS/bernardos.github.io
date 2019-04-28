import {Omit} from 'utility-types'
import * as Attrs from "./attributes";
// type FilterFlags<Base, Condition> = {
// [Key in keyof Base]:
//     Base[Key] extends Condition ? Key : never
// }
// type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base]

// type NoFunction<Base extends object> = Omit<
// Base,
// NonUndefined<AllowedNames<Base, Function | null | undefined>>
// >

declare global {
  namespace JSX {
    interface Element extends HTMLElement {}
    interface ElementClass {}
    interface ElementAttributesProperty {}
    interface ElementChildrenAttribute {}
    interface IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> {}
    interface IntrinsicElements {
      a: Attrs.HTMLAnchorElementAttributes
      slot: Attrs.HTMLSlotElementAttributes
    }
  }
}

export * from "./attributes";
