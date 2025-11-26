oncontextmenu = (e) => {
    let rightmenudiv = document.getElementById("rightmenu");
    if(rightmenudiv === null){
        e.preventDefault();
        let menu = document.createElement("div")
        menu.id = "rightmenu"
        menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
        if(menu.parentNode){
            menu.parentNode.removeChild(menu);
        }
        menu.onmouseleave = () => rightmenu.outerHTML = '', onmenu = false;
        if(e.target.closest(".item-papelera"))
            if(e.target.closest("#icos1")){
                        menu.innerHTML = "<p>Explore</p><p>Open</p><p>Print</p><p>Empty Recycle Bin</p> <hr></hr> <p>Paste</p> <hr></hr> <p>Create Shortcut</p> <hr></hr> <p>Properties</p>"
            }
            else{
        menu.innerHTML = "<p>Open</p><p>Add to Zip</p><hr></hr> <p>Send To</p> <hr></hr> <p>Cut</p><p>Copy</p> <hr></hr> <p>Create Shotcut</p> <p>Delete</p> <p>Rename</p> <hr></hr> <p>Properties</p>"}
        else{
        menu.innerHTML = `<p>Arrange Icons</p><p>Line Up Icons</p> <hr></hr> <p>Paste</p><p>Paste Shortcut</p><p>Undo Delete</p> <hr></hr> <p>New</p> <hr></hr> <button onclick='menuerror("An error message to annoy you.")' class='textbutt'>Properties</button>`
        }
        document.body.appendChild(menu)
    }
}

function menuerror(errormessage){
    let errormenudiv = document.getElementById("errormenu");
    if(errormenudiv === null){
        let menuer = document.createElement("div")
        menuer.id = "errormenu"
        if(menuer.parentNode){
            menuer.parentNode.removeChild(menuer);
        } 
        menuer.innerHTML = `<div class='content-inside-95-error' style='width: auto; height: auto;'> <div class='title-95' id='win'> <h1>Windows 95</h1><div><button onclick='closeerror()' id='win'><img src='./Images/Icons/close.svg' alt='X'  id='win'></button> </div> </div> <div class='content-inside-95-error-flex'> <img src='./Images/Icons/msg_warning-0.ico' style='width: 50px; height: 50px;'> <p>${errormessage}</p> </div> </div>`
        document.body.appendChild(menuer)
    }
}

function closeerror(){
    menuer = document.getElementById("errormenu");
    menuer.outerHTML = '';
}

window.onerror = function(error) {
    menuerror(error);
}