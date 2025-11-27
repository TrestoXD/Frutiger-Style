let newX = 0, newY = 0, startX = 0, startY = 0;
let offsetX;
let offsetY;
let clicked;
let currenttarget;
let active;
let currentWindow;
let enablemoving;

let maximizeimg = "../Images/Icons/maximize.svg";
let minimizeimg = "../Images/Icons/minimize.svg";

//Window 0 BIENVENIDO
let maximze_state;
const winWL = document.getElementById('win0')
const card = document.getElementById('card0')
//Window 1 PAPELERA
let maximze_state_1
const card1 = document.getElementById('card1');
const winRB = document.getElementById('win1');
//Window 2 Sobre mi
let maximze_state_2
const card2 = document.getElementById('card2');
const winSM = document.getElementById('win2');
//Window 3 Mi ordenador
let maximze_state_3
const card3 = document.getElementById('card3');
const winMO = document.getElementById('win3');
//Window 4 RESUMEN
let maximze_state_4
const card4 = document.getElementById('card4');
const winRE = document.getElementById('win4');
//Window 5 Proyectos
let maximze_state_5
const card5 = document.getElementById('card5');
const winPR = document.getElementById('win5');
//Window 6 Correo
let maximze_state_6
const card6 = document.getElementById('card6');
const winCO = document.getElementById('win6');
//Listeners
card4.addEventListener('mousedown', mouseDown)
card1.addEventListener('mousedown', mouseDown)
card.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    if(e.target.classList.contains("title-95") || e.target.classList.contains("title-95-act")){
        startX = e.clientX
        startY = e.clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
        currentWindow = e.target.id
        currentcard = e.target.parentNode.parentNode.parentNode.id
        console.log(currentcard)
        console.log(currentWindow)
        CurrentWindowManager(currentWindow);
        enablemoving = currentWindow;
    }
    currenttarget = e.target.id;
    //showDiv(e);

}

function mouseMove(e){
    if(enablemoving == 'win0'){
        mouseMoving(e,card,'WL');
    }else if(enablemoving == 'win1'){
        mouseMoving(e,card1,'RB');
    }else if(enablemoving == 'win2'){
        mouseMoving(e,card2,'SM');
    }else if(enablemoving == 'win3'){
        mouseMoving(e,card3,'MO');
    }else if(enablemoving == 'win4'){
        mouseMoving(e,card4,'RE');
    }else if(enablemoving == 'win5'){
        mouseMoving(e,card5,'PR');
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
    if(currenttarget == 'win0'){
        document.querySelector('.buttontaskWL').classList.add('active')
        active.classList.add('active')
    }else if (currenttarget == 'win1'){
        document.querySelector('.buttontaskRB').classList.add('active')
        active.classList.add('active')
    }else if (currenttarget == 'win2'){
        document.querySelector('.buttontaskSM').classList.add('active')
        active.classList.add('active')
    }else if(currenttarget == 'win4'){
        document.querySelector('.buttontaskRE').classList.add('active')
        active.classList.add('active')
    }else if(currenttarget == 'win5'){
        document.querySelector('.buttontaskPR').classList.add('active')
        active.classList.add('active')
    }
}
//Mensaje para vito: Lo has conseguido felicidades, Ahora estoy en tu codigo ::Ninjaxix00::

//opening apps
function openapp(id, tag){
    document.getElementById( 'card' + id).classList.remove('active')
    document.getElementById('button' + tag).classList.remove('active')
    console.log("Applicacion abierta correctamente")
}

//minimize apps
function minimize(){
    active.classList.add('active')
}

//maximinimize apps
function maximinimize(id){
    document.getElementById('card' + id).classList.remove('active')
}

//maximize apps
function maximizewellcome(){
    maximize(card, "WL");
}
function maximizeRecicleBin(){
    maximize(card1, "RB");
}
function maximizeResumen(){
    maximize(card4, "RE");
}
function maximizeProyectos(){
    maximize(card5, "PR")
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

// Show Div
function showDiv(element){
    let parent = element.parentNode.parentNode.id;
    console.log(parent);
    active = element.parentNode.parentNode.parentNode.parentNode;
    console.log(active)
}

// Current WindowManager
function CurrentWindowManager(window){
    for (let i = 0; i <= 6; i++) {
        if('win' + i == window){
            console.log("ski" + i);
            document.getElementById('card' + i ).style.zIndex = "1";
            if(document.getElementById('win' + i).classList.contains("title-95")){
                console.log("FINDED")
                document.getElementById('win' + i).classList.replace("title-95","title-95-act")
            }
        }
        else if('win' + i != window){
            console.log("kno" + i);
            document.getElementById('card' + i).style.zIndex = "-1";
            if(document.getElementById('win' + i).classList.contains("title-95-act")){
                console.log("FINDED")
                document.getElementById('win' + i).classList.replace("title-95-act","title-95")
            }
        }
    }
}