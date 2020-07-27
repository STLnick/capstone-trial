const overlay = document.querySelector('.overlay')
const mobileMenu = document.querySelector('.mobile-menu')

document.querySelector('.menu-btn').addEventListener('click', () => {
  mobileMenu.classList.toggle('active-mobile-menu')
  overlay.classList.toggle('enabled')
})
