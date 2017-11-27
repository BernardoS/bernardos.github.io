const theme = localStorage.getItem('dark') ? 'dark' : 'light'

const link = document.createElement('link')
link.href = `/assets/themes/${theme}.css`
link.rel = 'stylesheet'

document.head.appendChild(link)
if (theme === 'dark') {
  document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('mdc-theme--dark')
  })
}
