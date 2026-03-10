let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = '0';
        dots[i].classList.remove('bg-pink-500');
    });

    setTimeout(() => {
        slides[index].style.opacity = '1';
        dots[index].classList.add('bg-pink-500');
    }, 100);

    currentSlideIndex = index;
}

function changeSlide(direction) {
    let newIndex = currentSlideIndex + direction;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
}

function currentSlide(index) {
    showSlide(index - 1);
}

showSlide(0);