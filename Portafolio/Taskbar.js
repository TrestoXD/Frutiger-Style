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
    else if(document.getElementById('sidemen').classList.contains('overlay_taskbar.active') && meg == true){
        console.log("Off");
        document.getElementById('sidemen').classList.remove('active');
        meg = false;
    }
    console.log(meg);
}