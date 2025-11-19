let newX = 0, newY = 0, startX = 0, startY = 0;
let offsetX;
let offsetY;
let clicked;
let currenttarget;
let active;

//Window 1
let maximze_state;
const win = document.getElementById('win')
const card = document.getElementById('card')

let maximze_state_1
const card1 = document.getElementById('card1');
const win1 = document.getElementById('win1');

//Listeners
card1.addEventListener('mousedown', mouseDown)
card.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    if(e.target.classList.contains("title-95")){
        startX = e.clientX
        startY = e.clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }
    currenttarget = e.target.id;
    //showDiv(e);
}

function mouseMove(e){
    if(e.target == win){
        newX = startX - e.clientX 
        newY = startY - e.clientY 
        
        startX = e.clientX
        startY = e.clientY

        card.style.top = (card.offsetTop - newY) + 'px'
        card.style.left = (card.offsetLeft - newX) + 'px'
        if(maximze_state == false){
        maximze_state = true;
        document.getElementById('maxi').src="../Images/Icons/maximize.svg"
        card.style.width = 500 + 'px';
        card.style.height = 230 + 'px';
        card.style.top = offsetY + 200
        card.style.left = offsetX;
        }
    }
    else if(e.target == win1){
        newX = startX - e.clientX 
        newY = startY - e.clientY 
        
        startX = e.clientX
        startY = e.clientY

        card1.style.top = (card1.offsetTop - newY) + 'px'
        card1.style.left = (card1.offsetLeft - newX) + 'px'
        if(maximze_state == false){
        maximze_state = true;
        document.getElementById('maxi').src="../Images/Icons/maximize.svg"
        card1.style.width = 500 + 'px';
        card1.style.height = 230 + 'px';
        card1.style.top = offsetY + 200
        card1.style.left = offsetX;
    }
    }
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
    currenttarget = e.target.id;
}

function closeWellcome(){
    console.log(currenttarget)
    if(currenttarget == 'win'){
        //document.querySelector('.overlay_desktop').classList.add('active')
        document.querySelector('.buttontask','#welcome').classList.add('active')
        active.classList.add('active')
    }
    else if (currenttarget == 'win1'){
        active.classList.add('active')
        document.querySelector('.buttontask','#reciclebin').classList.add('active')
    }

}
//Mensaje para vito: Lo has conseguido felicidades, Ahora estoy en tu codigo ::Ninjaxix00::

function openwellcome(){
    if(document.querySelector('.overlay_desktop.active')){
        document.querySelector('.overlay_desktop').classList.remove('active')
        document.querySelector('.buttontask','#welcome').classList.remove('active')
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
        document.getElementById('maxi').src="../Images/Icons/restore.svg"
    }
    else{
        document.getElementById('maxi').src="../Images/Icons/maximize.svg"
        card.style.width = 500 + 'px';
        card.style.height = 230 + 'px';
        card.style.top = offsetY
        card.style.left = offsetX

    }  
    console.log("offset is: " + offsetX);
}

function showDiv(element){
    let parent = element.parentNode.parentNode.id;
    console.log(parent);
    active = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
}