const container = document.querySelector(".heart-container")
const fotos = [
    'imgs/img1.png',
    'imgs/img2.jpg',
    'imgs/img3.jpeg'
]

function criarCoracao() {
    const heart = document.createElement("div")
    heart.classList.add('heart')

    const shape = document.createElement("div")
    shape.classList.add('heart-shape')

    const img = document.createElement("img")
    img.src = fotos[Math.floor(Math.random() * fotos.length)]

    heart.appendChild(shape)
    heart.appendChild(img)

    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = (6 + Math.random() * 6) + "s"
        
    container.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 12000)
}

setInterval(criarCoracao, 800)