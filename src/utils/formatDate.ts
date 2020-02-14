
const dateFormatter = new Intl.DateTimeFormat('default', {
  year: 'numeric',
  month: '2-digit'
})

export default (template: TemplateStringsArray, ...dates: Date[]) => template.map((literal, index) => (
  index < dates.length
    ? `${literal}${dateFormatter.format(dates[index])}`
    : literal
)).join('')
