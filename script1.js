function toggleMenu() {
  var menu = document.getElementById('navMenu')
  menu.classList.toggle('active')
}

const slides = document.querySelector('.slides')
const images = document.querySelectorAll('.slides img')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let index = 0
const totalSlides = images.length

function updateSlider() {
  slides.style.transform = `translateX(${-index * 100}%)`
}

nextButton.addEventListener('click', () => {
  index = (index + 1) % totalSlides
  updateSlider()
})

prevButton.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides
  updateSlider()
})
