const carousel = document.querySelector('.carousel');
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel-slide'));
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');

let currentSlide = 0;

function showSlide(slide) {
  carouselSlides[currentSlide].classList.remove('active');
  carouselSlides[slide].classList.add('active');
  currentSlide = slide;
}

prevBtn.addEventListener('click', () => {
  const prevSlide = currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1;
  showSlide(prevSlide);
});

nextBtn.addEventListener('click', () => {
  const nextSlide = currentSlide === carouselSlides.length - 1 ? 0 : currentSlide + 1;
  showSlide(nextSlide);
});

showSlide(currentSlide);
