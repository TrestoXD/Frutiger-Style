let newX = 0, newY = 0, startX = 0, startY = 0;
let offsetX;
let offsetY;
let clicked;
let currenttarget;
let active;

let maximizeimg = "../Images/Icons/maximize.svg";
let minimizeimg = "../Images/Icons/minimize.svg";

//Window 1
let maximze_state;
const winWL = document.getElementById('win')
const card = document.getElementById('card')
let enablemoving = false;
//Window 2
let maximze_state_1
const card1 = document.getElementById('card1');
const winRB = document.getElementById('win1');
let enablemoving1 = false;
//Window 3
let maximze_state_2
const card2 = document.getElementById('card2');
const winSM = document.getElementById('win2');
let enablemoving2 = false;
//Window 4
let maximze_state_3
const card3 = document.getElementById('card3');
const winMO = document.getElementById('win3');
let enablemoving3 = false;
//Window 5
let maximze_state_4
const card4 = document.getElementById('card4');
const winRE = document.getElementById('win4');
let enablemoving4 = false;
//Window 6
let maximze_state_5
const card5 = document.getElementById('card5');
const winPR = document.getElementById('win5');
let enablemoving5 = false;
//Window 7
let maximze_state_6
const card6 = document.getElementById('card6');
const winCO = document.getElementById('win6');
let enablemoving6 = false;
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
    if(e.target == winWL){
        enablemoving = true;
        enablemoving1 = false;
    } else if(e.target == winRB){
        enablemoving = false;
        enablemoving1 = true;
    } else{
        enablemoving = false;
        enablemoving1 = false;
    }
}

function mouseMove(e){
    if(enablemoving == true){
        mouseMoving(e,card,'WL');
    }
    else if(enablemoving1 == true){
        mouseMoving(e,card1,'RB');
    }
}

function mouseMoving(e, cards, tag){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
        
    startX = e.clientX
    startY = e.clientY

    cards.style.top = (cards.offsetTop - newY) + 'px'
    cards.style.left = (cards.offsetLeft - newX) + 'px'
    if(maximze_state == false){
    maximze_state = true;
    document.getElementById('maxi' + tag).src=maximize
    cards.style.width = oldx;
    cards.style.height = oldy;
    cards.style.top = offsetY + 200
    cards.style.left = offsetX;
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
function openapp(id, tag){
    if(id == 0){
        document.getElementById('container').classList.remove('active')
        document.getElementById('button' + tag).classList.remove('active')
    }else{
        document.getElementById('container' + id).classList.remove('active')
        document.getElementById('button' + tag).classList.remove('active')
    }
}

//minimize apps
function minimize(){
    active.classList.add('active')
}

//maximinimize apps
function maximinimize(id){
    if(id == 0){
        document.getElementById('container').classList.remove('active')
    }else{
        document.getElementById('container' + id).classList.remove('active')
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
        document.getElementById('maxi' + tag).src="./Images/Icons/maximize.svg"
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
        document.getElementById('maxi' + tag).src="./Images/Icons/restore.svg"
    }  
    console.log("offset is: " + offsetX);
}

function showDiv(element){
    let parent = element.parentNode.parentNode.id;
    console.log(parent);
    active = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
}