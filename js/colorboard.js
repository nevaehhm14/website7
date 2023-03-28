const container = document.getElementById('container')
const colors = ['orange', 'yellow', 'white', 'cornflowerblue', 'lightskyblue' ]
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const sqaure = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(sqaure))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = color[Math.floor(Math.random() * 5)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#1f1f1f'
}