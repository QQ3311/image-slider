const images = [
  { src: 'images/1.jpg', alt: 'Вест-хайленд-уайт-терьер' },
  { src: 'images/2.jpg', alt: 'Фокстерьер' },
  { src: 'images/3.jpg', alt: 'Хаски' },
  { src: 'images/4.jpg', alt: 'Французский бульдог' },
  { src: 'images/5.jpg', alt: 'Лхаса-апсо' },
];

const sliderImage = document.getElementById('sliderImage');
const sliderCounter = document.getElementById('sliderCounter');
const sliderPrevBtn = document.getElementById('sliderPrevBtn');
const sliderNextBtn = document.getElementById('sliderNextBtn');

let currentIndex = 0;

function updateSlider() {
  const currentImage = images[currentIndex];

  sliderImage.src = currentImage.src;
  sliderImage.alt = currentImage.alt;
  sliderCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function showPrev() {
  // Слагаемое images.length обязательно: оператор % в JavaScript возвращает
  // остаток со знаком делимого, поэтому -1 % 5 даёт -1, а не 4.
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

sliderPrevBtn.addEventListener('click', showPrev);
sliderNextBtn.addEventListener('click', showNext);

updateSlider();
