import './scss/style.scss'

const router = document.getElementById('router')
/** @type {HTMLAnchorElement[]} */
const navs = Array.from(document.getElementsByClassName('nav'))

onload = () => {
  router.history.listen(setCurrentNav)
  setCurrentNav()
}

function setCurrentNav () {
  for (const nav of navs) {
    if (nav.pathname === router.history.location.pathname) {
      nav.classList.add('nav--current')
    } else nav.classList.remove('nav--current')
  }
}
