declare module 'camelify' {
  type Camelify = <T extends object | string>(object: T) => T
  const camelify: Camelify
  export default camelify
}
