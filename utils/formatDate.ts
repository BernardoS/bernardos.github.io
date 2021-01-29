type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type Month =
  | `${Extract<Digits, 0>}${Exclude<Digits, 0>}`
  | `${Extract<Digits, 1>}${Extract<Digits, 0 | 1 | 2>}`

type Year = `${Digits}${Digits}`

export type DateString = `${Month}/${Year}` | 'now'

const dateFormatter = new Intl.DateTimeFormat('default', {
  year: '2-digit',
  month: '2-digit'
})

export function formatDateString(dateString: DateString) {
  if (dateString === 'now') return dateFormatter.format(new Date())
  const [month, year] = dateString.split('/').map(value => Number(value))
  const date = new Date(year + 2000, month - 1)
  return dateFormatter.format(date)
}
