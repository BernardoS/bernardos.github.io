/**
 * @template T
 * @template U
 * @param {T[]} array 
 * @param {(value: T) => U} lambda 
 * @return {U[]}
 */
export default function flatMap(array, lambda) { 
  return [].concat(...array.map(lambda))
}
