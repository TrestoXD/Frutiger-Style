let newX = 0, newY = 0, startX = 0, startY = 0;
let offsetX;
let offsetY;

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

function maximinimizewellcome(){
    if(document.querySelector('.overlay_desktop.active')){
        document.querySelector('.overlay_desktop').classList.remove('active')
    }
}

function maximizewellcome(){

    let maximze_state;
    if(card.style.width == '100%'){
        maximze_state = true;
    }
    else{
        maximze_state = false;
    }

    if(maximze_state == false){
        card.style.width = 100 + '%';
        card.style.height = 100 + '%';
        offsetX = card.style.left;
        offsetY = card.style.top;
        card.style.top = 0 + 'px'
        card.style.left = 0 + 'px';
    }
    else{
        card.style.width = 500 + 'px';
        card.style.height = 230 + 'px';
        card.style.top = offsetY
        card.style.left = offsetX

    }
    console.log("offset is: " + offsetX);
}