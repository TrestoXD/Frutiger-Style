let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card')
const windowinside = document.getElementById('cardinside')

card.addEventListener('mousedown', mouseDown)
windowinside.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    card.style.top = (card.offsetTop - newY) + 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'

    windowinside.style.top = (windowinside.offsetTop - newY) + 'px'
    windowinside.style.left = (windowinside.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}