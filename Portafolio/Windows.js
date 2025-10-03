let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card');

card.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    if(e.target.classList.contains("title-95")){
        startX = e.clientX
        startY = e.clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }
}

function mouseMove(e){
    //if(e.target.tagName === 'DIV'){
        newX = startX - e.clientX 
        newY = startY - e.clientY 
        
        startX = e.clientX
        startY = e.clientY

        card.style.top = (card.offsetTop - newY) + 'px'
        card.style.left = (card.offsetLeft - newX) + 'px'
    //}
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}

function closeWellcome(){
    document.querySelector('.overlay_desktop').classList.add('active')
    document.querySelector('.buttontask').classList.add('active')
}

function openwellcome(){
    if(document.querySelector('.overlay_desktop.active')){
        document.querySelector('.overlay_desktop').classList.remove('active')
        document.querySelector('.buttontask').classList.remove('active')
    }
}

function minimizewellcome(){
    document.querySelector('.overlay_desktop').classList.add('active')
}

function maximizewellcome(){
    if(document.querySelector('.overlay_desktop.active')){
        document.querySelector('.overlay_desktop').classList.remove('active')
    }
}


function sidebarmenu(){
    menuisclicked = true;
    console.log(menuisclicked);
}
