const btn = document.getElementById('lang-btn-id')
const visibleDiv = document.getElementById('language-container-id')
const carouselMenu = document.getElementById('mobile-carousel-id')
const caruselMobile = document.getElementById('menu')
const carosel = document.getElementById('dropdown-carousel')
const dropdownCarousel = document.getElementById('dropdown-language-container-id')

carouselMenu.addEventListener('click', () => {
    caruselMobile.classList.toggle('carousel-toggle')
})

btn.addEventListener('click', () => {
    visibleDiv.classList.toggle('toggle')
})

const userBtn = document.getElementById('users-id')
const userAction = document.getElementById('user-action-id')

userBtn.addEventListener('click', () => {
    userAction.classList.toggle('action-toggle')
})

document.getElementById('mobile-dropdown-carousel').addEventListener('click', () => {
    carosel.classList.toggle('dropdown-carousel')
})

document.getElementById('dropdown-lang-btn-id').addEventListener('click', () => {
    dropdownCarousel.classList.toggle('toggle-dropdown')
})