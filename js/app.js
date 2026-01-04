const slider = document.getElementById('slider');
const slides = slider.children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  if (index < slides.length - 1) {
    index++;
    updateSlider();
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});
