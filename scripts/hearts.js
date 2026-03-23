const container = document.querySelector(".heart-container")

function createHearts() {
    const heart = document.createElement("div")
    heart.classList.add('heart')

    const shape = document.createElement("div")
    shape.classList.add('heart-shape')

    heart.appendChild(shape)

    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = (6 + Math.random() * 6) + "s"
        
    container.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 12000)
}

setInterval(createHearts, 800)