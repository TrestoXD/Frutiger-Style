let meg;

if(document.getElementById('sidemen').classList.contains('overlay_taskbar.active')){
    meg = true;
}
else if(document.getElementById('sidemen').classList.contains('overlay_taskbar')){
    meg = false;
}


function sidebarmenu(){
    if(document.getElementById('sidemen').classList.contains('overlay_taskbar') && meg == false){
        console.log("On");  
        document.getElementById('sidemen').classList.add('active');
        meg = true;
    }
    else if(document.getElementById('sidemen').classList.contains('overlay_taskbar') && meg == true){
        console.log("Off");
        document.getElementById('sidemen').classList.remove('active');
        meg = false;
    }
    //console.log(meg);
}

addEventListener("mouseup", (e) => {
    //if(e.target.classList.contains('overlay_taskbar')){
    //    console.log("Detectado");
    //}
    let current = e.target.getAttribute('class');
    //console.log(current)

    if(e.target.getAttribute('class') === "content-inside-95" || e.target.getAttribute("class") === "windows95-taskbar-menu-title" || e.target.getAttribute("id") === "buttonstarting" || e.target.getAttribute("src") === "./Images/Icons/sidebar95.png" || e.target.getAttribute("id") === "rightmenu"){
        console.log("si");
    }else if(e.target.getAttribute('id') == "desktop"){
        console.log("Desktop clicked")
    }
    else{
        document.getElementById('sidemen').classList.remove('active');
        meg = false;
        //console.log("no");
    }
}
)

//let buttons = document.querySelectorAll(".button-taskbarmenu")
//
//buttons.forEach(button =>{
//    button.addEventListener("mouseenter", (e) => {
//        const parentoffset = button.getBoundingClientRect();
//        let relX = e.pageX - parentoffset.left;
//        let relY = e.pageY - parentoffset.top;
//        
//        spax = relY;
//        spay = relX;
//        createUIfolder(spax, spay)
//    })
//})

function createUIfolder(spax, spay){
    let rightmenudiv = document.getElementById("rightmenu");
    if(rightmenudiv === null){
        let menu = document.createElement("div")
        menu.id = "rightmenu"
        menu.style = `bottom:${spay}px;left:${spax}px`
        if(menu.parentNode){
            menu.parentNode.removeChild(menu);
        }
        menu.onmouseleave = () => rightmenu.outerHTML = '', onmenu = false;
        menu.innerHTML = `<button> <img src="./Images/Icons/Youtube.png"> Youtube</button> <button> <img src="./Images/Icons/Twitch_icon.png"> Twitch</button> <button><img src="./Images/Icons/Github.png">Github</button> <button> <img src="./Images/Icons/instagram.png"> Instagram</button>`
        document.body.appendChild(menu)
    }
}