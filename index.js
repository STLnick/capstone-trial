const overlay = document.querySelector('.overlay')
const mobileMenu = document.querySelector('.mobile-menu')

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('active-mobile-menu')
  overlay.classList.toggle('enabled')
}

document.querySelector('.menu-btn').addEventListener('click', () => {
  toggleMobileMenu()
})
