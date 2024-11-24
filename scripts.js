// JavaScript for automatic carousel sliding
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showNextSlide() {
    carouselItems[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextSlide, 3000);
