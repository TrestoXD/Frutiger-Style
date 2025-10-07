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
        console.log("yes")
        icoX = icostartX - e.clientX 
        icoY = icostartY - e.clientY 
        
        icostartX = e.clientX
        icostartY = e.clientY

        e.target.style.top = (e.target.offsetTop - icoY) + 'px'
        e.target.style.left = (e.target.offsetLeft - icoX) + 'px'
        e.target.style.opacity = 0.5;
    }
}

function mouseUpicons(e){
    document.removeEventListener('mousemove', mouseMoveicons)
    icoX = icostartX - e.clientX 
    icoY = icostartY - e.clientY 
        
    icostartX = e.clientX
    icostartY = e.clientY

    e.target.style.top = (Math.floor((e.target.offsetTop - icoY) /100))*100 + 10 +'px'
    e.target.style.left = (Math.floor((e.target.offsetLeft - icoX) /100 ))*100 + 5 + 'px'
    e.target.style.opacity = 1;
    console.log("END")
}