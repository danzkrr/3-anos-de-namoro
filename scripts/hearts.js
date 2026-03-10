const container = document.querySelector(".heart-container")
const photos = [
    'imgs/img1.png',
    'imgs/img2.jpg',
    'imgs/img3.jpeg'
]

function createHearts() {
    const heart = document.createElement("div")
    heart.classList.add('heart')

    const shape = document.createElement("div")
    shape.classList.add('heart-shape')

    const img = document.createElement("img")
    img.src = photos[Math.floor(Math.random() * photos.length)]

    heart.appendChild(shape)
    heart.appendChild(img)

    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = (6 + Math.random() * 6) + "s"
        
    container.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 12000)
}

setInterval(createHearts, 800)