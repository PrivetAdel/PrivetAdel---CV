const certificates = document.querySelector(`.section-certificates__wrap`)
const slides = certificates.querySelectorAll(`.section-certificates__certificate`);
const next = certificates.querySelector(`.next`);
const previous = certificates.querySelector(`.previous`);
let currentSlide = 0;

certificates.classList.remove(`section-certificates__wrap--nojs`);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = `section-certificates__certificate`;
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = `section-certificates__certificate section-certificates__certificate--showing`;
}

next.addEventListener(`click`, nextSlide);
previous.addEventListener(`click`, previousSlide);
