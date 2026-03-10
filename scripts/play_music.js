const audio = document.getElementById('bgMusic');

audio.play().catch(e => console.log('Autoplay bloqueado:', e));

function toggleMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}