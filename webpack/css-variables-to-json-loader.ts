import { loader } from 'webpack'
import path from 'path'
import fs from 'fs'
import camelify from 'camelify'

export default function (this: loader.LoaderContext, source: string) {
  const rules = source.match(/--(\w|-|_)+\s*:[^;}]+(;|})/gm)
  if (!rules) return source
  const jsonPath = path.format({
    ...path.parse(this.resourcePath),
    ext: '.json',
    base: undefined
  })
  const json = rules.map(rule => rule.split(':')).reduce((acc, [name, value]) => ({
    ...acc,
    [camelify(name.substring(2).trim())]: value.substring(0, value.length - 1).trim()
  }), {})
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2))
  return source
}
