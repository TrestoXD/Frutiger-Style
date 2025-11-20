let newX = 0, newY = 0, startX = 0, startY = 0;
let offsetX;
let offsetY;
let clicked;
let currenttarget;
let active;

//Window 1
let maximze_state;
const winWL = document.getElementById('win')
const card = document.getElementById('card')

let maximze_state_1
const card1 = document.getElementById('card1');
const winRB = document.getElementById('win1');

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
    if(e.target == winWL){
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
    else if(e.target == winRB){
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
        document.querySelector('.buttontaskWL').classList.add('active')
        active.classList.add('active')
    }
    else if (currenttarget == 'win1'){
        document.querySelector('.buttontaskRB').classList.add('active')
        active.classList.add('active')
    }
}
//Mensaje para vito: Lo has conseguido felicidades, Ahora estoy en tu codigo ::Ninjaxix00::

//opening apps

function openwellcome(){
    //if(document.querySelector('.overlay_desktop.active')){
        document.getElementById('welcome').classList.remove('active')
        document.getElementById('container').classList.remove('active')
    //}
}

function onpenRecicleBin(){
    //if(document.querySelector('.overlay_desktop.active')){
        document.getElementById('reciclebin').classList.remove('active')
        document.getElementById('container1').classList.remove('active')
    //}
}

//minimize apps
function minimizewellcome(){
    document.querySelector('.overlay_desktop').classList.add('active')
}

//maximinimize apps
function maximinimizewellcome(){
    if(document.querySelector('.overlay_desktop.active')){
        document.querySelector('.overlay_desktop').classList.remove('active')
    }
}

//maximize apps
function maximizewellcome(){
    maximize(card, "WL");
}
function maximizeRecicleBin(){
    maximize(card1, "RB");
}
let oldx = 100;
let oldy = 100;
function maximize(cards, tag){
    //oldx = cards.style.width;
    //oldy = cards.style.height;
    console.log(oldx)
    console.log('maxi' + tag)
    if(cards.style.width == '100%'){
        maximze_state = true;
        
    }
    else{
        maximze_state = false;
    }

    if(maximze_state == true){
        document.getElementById('maxi' + tag).src="../Images/Icons/maximize.svg"
        cards.style.width = oldx;
        cards.style.height = oldy;
        cards.style.top = offsetY
        cards.style.left = offsetX
        console.log(oldy)
    }
    else{
        oldx = cards.style.width;
        oldy = cards.style.height;
        cards.style.width = 100 + '%';
        cards.style.height = 100 + '%';
        offsetX = cards.style.left;
        offsetY = cards.style.top;
        cards.style.top = 0 + 'px'
        cards.style.left = 0 + 'px';
        document.getElementById('maxi' + tag).src="../Images/Icons/restore.svg"
    }  
    console.log("offset is: " + offsetX);
}

function showDiv(element){
    let parent = element.parentNode.parentNode.id;
    console.log(parent);
    active = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
}