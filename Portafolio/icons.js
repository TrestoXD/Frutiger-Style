let icoX = 0, icoY = 0, icostartX = 0, icostartY = 0;

let icona = document.querySelectorAll('#icos');

icona.forEach(function(elem){
   elem.addEventListener('mousedown', mouseDownicons)
});

function mouseDownicons(e){
    console.log("hola")
    icostartX = e.clientX
    icostartY = e.clientY

    document.addEventListener('mousemove', mouseMoveicons)
    document.addEventListener('mouseup', mouseUpicons)
}

function mouseMoveicons(e){
    if(e.target.closest(".item-papelera")){
        let parent = e.target.parentNode;
        console.log("yes")
        icoX = icostartX - e.clientX 
        icoY = icostartY - e.clientY 
        
        icostartX = e.clientX
        icostartY = e.clientY

        parent.style.top = (e.target.offsetTop - icoY) + 'px'
        parent.style.left = (e.target.offsetLeft - icoX) + 'px'
        parent.style.opacity = 0.5;
    }
}

function mouseUpicons(e){
    document.removeEventListener('mousemove', mouseMoveicons)
    icoX = icostartX - e.clientX 
    icoY = icostartY - e.clientY 
        
    icostartX = e.clientX
    icostartY = e.clientY

    parent.style.top = (Math.floor((e.target.offsetTop - icoY) /100))*100 + 10 +'px'
    parent.style.left = (Math.floor((e.target.offsetLeft - icoX) /100 ))*100 + 10 + 'px'
    parent.style.opacity = 1;
    console.log("END")
}