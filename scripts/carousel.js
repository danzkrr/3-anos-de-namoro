let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Função única para mostrar slides
function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    slides.forEach((slide, i) => {
        // Usando opacity para manter a transição suave do Tailwind (duration-700)
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.pointerEvents = i === index ? 'auto' : 'none'; 
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        // Suporte para a cor do Tailwind que você usou
        i === index ? dot.classList.add('bg-pink-500') : dot.classList.remove('bg-pink-500');
    });

    currentSlideIndex = index;
}

// Funções globais para os botões do HTML onclick
window.changeSlide = function(direction) {
    showSlide(currentSlideIndex + direction);
}

window.currentSlide = function(index) {
    showSlide(index - 1);
}

// Fullscreen Modal
document.querySelectorAll('.fullscreen-img').forEach(img => {
    img.addEventListener('click', function () {
        const fullSrc = this.getAttribute('data-fullsrc');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        
        modalImg.src = fullSrc;
        modal.style.display = 'block';
    });
});

window.closeModal = function(event) {
    // Fecha se clicar no X ou fora da imagem
    if (!event || event.target.classList.contains('modal') || event.target.classList.contains('close')) {
        document.getElementById('imageModal').style.display = 'none';
    }
}

// ESC para fechar
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Lógica da Música corrigida
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

if(musicBtn) {
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.textContent = '🎵 Aperte. Hihihi!';
        } else {
            bgMusic.play();
            musicBtn.textContent = '🔇 Parar música';
        }
        isPlaying = !isPlaying;
    });
}

// Inicializar
showSlide(0);