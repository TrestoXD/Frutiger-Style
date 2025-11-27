let newX = 0, newY = 0, startX = 0, startY = 0;
let offsetX;
let offsetY;
let clicked;
let currenttarget;
let active;
let currentWindow;
let enablemoving;
let totalapp = 6;
let maximze_state;

localStorage.setItem("totalapps", totalapp);

let maximizeimg = "./Images/Icons/maximize.svg";
let minimizeimg = "./Images/Icons/minimize.svg";

// Listeners

for (let i = 0; i <= totalapp; i++) {
    document.getElementById('card' + i).addEventListener('mousedown', mouseDown);
}

document.onclick = function (e) {
    console.log(e.target)
}

// Mousedown
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
    for (let i = 0; i <= 6; i++) {
        if(enablemoving == ('win' + i)){
            mouseMoving(e,('card' + i))
            //console.log('card'+i)
        }
    }
}

function mouseMoving(e, cards){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
    
    startX = e.clientX
    startY = e.clientY

    cardi = document.getElementById(cards);

    cardi.style.top = (cardi.offsetTop - newY) + 'px'
    cardi.style.left = (cardi.offsetLeft - newX) + 'px'
    if(maximze_state == false){
    id = cards.substring(4,5);
    maximze_state = true;
    cardi.style.width = oldx;
    cardi.style.height = oldy;
    cardi.style.top = offsetY + 200
    cardi.style.left = offsetX;
    document.getElementById('maxi' + id).src="./Images/Icons/restore.svg"
    console.log("statechanged")
    }
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
    currenttarget = e.target.id;
}

function closeWellcome(){
    console.log(currenttarget)
    for (let i = 0; i <= totalapp; i++) {
        if(currenttarget == ('win' + i)){
            console.log("FINDED")
            document.getElementById('button' + i).classList.add('active')
            active.classList.add('active')
        }
    }
}
//Mensaje para vito: Lo has conseguido felicidades, Ahora estoy en tu codigo ::Ninjaxix00::

//opening apps
function openapp(id){
    document.getElementById( 'card' + id).classList.remove('active')
    document.getElementById('button' + id).classList.remove('active')
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
let oldx = 100;
let oldy = 100;
function maximize(e){
    console.log("CARD IS THIS THIS THIS " + e)
    cardi = document.getElementById(e);
    id = e.substring(4,5);
    console.log("The id is: "+ id);
    //oldx = cards.style.width;
    //oldy = cards.style.height;
    console.log(oldx)
    console.log('maxi' + id)
    if(cardi.style.width == '100%'){
        maximze_state = true;
    }
    else{
        maximze_state = false;
    }

    if(maximze_state == true){
        document.getElementById('maxi' + id).src="./Images/Icons/maximize.svg"
        cardi.style.width = oldx;
        cardi.style.height = oldy;
        cardi.style.top = offsetY
        cardi.style.left = offsetX
        console.log(oldy)
    }
    else{
        oldx = cardi.style.width;
        oldy = cardi.style.height;
        cardi.style.width = 100 + '%';
        cardi.style.height = 100 + '%';
        offsetX = cardi.style.left;
        offsetY = cardi.style.top;
        cardi.style.top = 0 + 'px'
        cardi.style.left = 0 + 'px';
        document.getElementById('maxi' + id).src="./Images/Icons/restore.svg"
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