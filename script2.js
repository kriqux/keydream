document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('.carousel')

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track')
    const images = Array.from(track.querySelectorAll('img'))
    const prevBtn = carousel.querySelector('.prev')
    const nextBtn = carousel.querySelector('.next')
    let index = 0

    // Функция для обновления трансформации
    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`
    }

    // Переключение на следующий слайд
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % images.length
      updateCarousel()
    })

    // Переключение на предыдущий слайд
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length
      updateCarousel()
    })
  })
})
