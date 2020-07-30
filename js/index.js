const overlay = document.querySelector('.overlay')
const menuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('active-mobile-menu')
  overlay.classList.toggle('enabled')
}

menuBtn.addEventListener('click', toggleMobileMenu)
// Toggle menu when 'Enter' is pressed
menuBtn.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    event.preventDefault();
    toggleMobileMenu()
  }
})
