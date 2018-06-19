export default function flatMap(array, lambda) { 
  return [].concat(...array.map(lambda))
}
