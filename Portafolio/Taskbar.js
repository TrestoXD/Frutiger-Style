let meg;
let visibletaskbar;
let visibletaskbarmenu;
let rightmenudiv = document.getElementById("rightmenu");
let taskmenu1 = document.createElement("div")

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

        if(e.target.getAttribute('class') === "content-inside-95" || e.target.getAttribute("class") === "windows95-taskbar-menu-title" || e.target.getAttribute("id") === "buttonstarting" || e.target.getAttribute("src") === "./Images/Icons/sidebar95.png" || e.target.getAttribute("id") === "rightmenu" || e.target.getAttribute("class") === "button-taskbar-menu" || e.target.getAttribute("class") === "windows95-taskbar-menu" || e.target.getAttribute("id") === "taskbarmenu" || e.target.getAttribute("id") === "rightmenu1"){
            console.log("si");
            visibletaskbarmenu = true
            visibletaskbar = true
        }else if(e.target.getAttribute('id') == "desktop"){
            console.log("Desktop clicked")
            visibletaskbarmenu = false
            visibletaskbar = false;
        }
        else{
            console.log(e.target.getAttribute('id'))
            document.getElementById('sidemen').classList.remove('active');
            meg = false;
            visibletaskbarmenu = false;
            visibletaskbar = false;

            //console.log("no");
        }

        if(visibletaskbarmenu == false){
            if(visibletaskbar == false){
                return;
            }else{
            taskmenu1.innerHTML = ``
            taskmenu1.style = `bottom:${-100}px;left:${-100}px`}
        
    }
})

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

function createUIfolder(spax, spay, id){
    if(rightmenudiv === null){
        taskmenu1.id = id
        taskmenu1.style = `bottom:${spay}px;left:${spax}px`
        if(taskmenu1.parentNode){
            taskmenu1.parentNode.removeChild(taskmenu1);
        }
        taskmenu1.onmouseleave = () => rightmenu.outerHTML = '', onmenu = false;
        if(id == 'rightmenu'){
taskmenu1.innerHTML = `<button onclick="window.open('https://www.youtube.com/@Tresto_XD','_blank')" id="rightmenu1"> <img src="./Images/Icons/Youtube.png" id="rightmenu1"> Youtube</button> <button id="rightmenu1" onclick="window.open('https://www.twitch.tv/eltresto_xd','_blank')"> <img src="./Images/Icons/Twitch_icon.png" id="rightmenu1"> Twitch</button> <button id="rightmenu1" onclick="window.open('https://github.com/TrestoXD','_blank')"><img src="./Images/Icons/Github.png" id="rightmenu1">Github</button> <button id="rightmenu1" onclick="window.open('https://www.instagram.com/trestoxd/','_blank')"> <img id="rightmenu1" src="./Images/Icons/instagram.png"> Instagram</button> <button id="rightmenu1" onclick="window.open('https://www.curseforge.com/members/tresto_xd/projects','_blank')"> <img src="./Images/Icons/curseforge.png" id="rightmenu1"> Curseforge</button> <button id="rightmenu1" onclick="window.open('https://modrinth.com/user/TrestoXD', '_blank')"> <img id="rightmenu1" src="./Images/Icons/Modrinth_Logo.png" class="black"> Modnirth </button>`
        }
        document.body.appendChild(taskmenu1)
    }
}

function deleteUIfolder(id){
    if(visibletaskbarmenu == false){
        taskmenu1.innerHTML = ``
        taskmenu1.id = ''
        taskmenu1.outerHTML = ''
        taskmenu1.style = `bottom:${-100}px;left:${-100}px`
    }
}