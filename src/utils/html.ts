const variableToString = (v: unknown) => {
  switch (typeof v) {
    case 'string': return v
    case 'object': {
      if (Array.isArray(v)) {
        return v.reduce((acc, curr) => `${acc}\n${curr}`, '')
      }
      return JSON.stringify(v)
    }
    case 'number':
    case 'bigint': return v.toString()
    case 'boolean':
    case 'function':
    case 'undefined':
    default: return ''
  }
}
const html = (literals: TemplateStringsArray, ...variables: unknown[]) => (
  literals.reduce((acc, curr, i) => `${acc}${curr}${variableToString(variables[i])}`, "")
)
export default html
