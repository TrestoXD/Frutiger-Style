let meg;

if(document.getElementById('sidemen').classList.contains('overlay_taskbar.active')){
    meg = true;
}
else if(document.getElementById('sidemen').classList.contains('overlay_taskbar')){
    meg = false;
}


function sidebarmenu(){
    if(document.getElementById('sidemen').classList.contains('overlay_taskbar') && meg == false){
        //console.log("On");  
        document.getElementById('sidemen').classList.add('active');
        meg = true;
    }
    else if(document.getElementById('sidemen').classList.contains('overlay_taskbar') && meg == true){
        //console.log("Off");
        document.getElementById('sidemen').classList.remove('active');
        meg = false;
    }
    //console.log(meg);
}

addEventListener("mousedown", (e) => {
    //if(e.target.classList.contains('overlay_taskbar')){
    //    console.log("Detectado");
    //}
    let current = e.target.getAttribute('class');
    console.log(current)

    if(e.target.getAttribute('class') === "content-inside-95" || e.target.getAttribute("class") === "windows95-taskbar-menu-title"){
        console.log("si");
    }
    else{
        document.getElementById('sidemen').classList.remove('active');
        meg = false;
        console.log("no");
    }
})