let icoX = 0, icoY = 0, icostartX = 0, icostartY = 0;

const ico1 = document.getElementById('icos1'), ico2 = document.getElementById('icos2'), ico3 = document.getElementById('icos3'), ico4 = document.getElementById('icos4'), ico5 = document.getElementById('icos5'), ico6 = document.getElementById('icos6'), ico7 = document.getElementById('icos7')

let icona = document.querySelectorAll('.item-papelera');
let draggable = true;

icona.forEach(function(elem){
   elem.addEventListener('mousedown', mouseDownicons);
   elem.addEventListener('mouseenter',mouseHover);
   elem.addEventListener('mouseleave', mouseOut);
});

function mouseDownicons(e){
    console.log("hola")
    icostartX = e.clientX
    icostartY = e.clientY

    document.addEventListener('mousemove', mouseMoveicons)
    document.addEventListener('mouseup', mouseUpicons)
}

function mouseHover(e){
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.199)';
    e.target.style.borderStyle = 'solid';
    e.target.style.borderColor = '#00000067';
    draggable = true;
}

function mouseOut(e){
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    e.target.style.borderStyle = 'solid';
    e.target.style.borderColor = '#00000000';
    draggable = false;
}

function mouseMoveicons(e){
    if(e.target.closest(".item-papelera") && draggable == true){
        console.log("yes")
        icoX = icostartX - e.clientX 
        icoY = icostartY - e.clientY 
        
        icostartX = e.clientX
        icostartY = e.clientY

        e.target.style.top = (e.target.offsetTop - icoY) + 'px'
        e.target.style.left = (e.target.offsetLeft - icoX) + 'px'
        if(e.target == ico1){
            e.target.classList.add('moving');
        }
        else if (e.target == ico2){
            e.target.classList.add('moving');
        }
        else if (e.target == ico3){
            e.target.classList.add('moving');
        }
        else if (e.target == ico4){
            e.target.classList.add('moving');
        }
        else if (e.target == ico5){
            e.target.classList.add('moving');
        }
        else if (e.target == ico6){
            e.target.classList.add('moving');
        }
        else if (e.target == ico7){
            e.target.classList.add('moving');
        }
    }
    else{
        icoX = icostartX - e.clientX 
        icoY = icostartY - e.clientY 
        
        icostartX = e.clientX
        icostartY = e.clientY

        e.target.style.top = (Math.floor((e.target.offsetTop - icoY) /100))*100 + 10 +'px'
        e.target.style.left = (Math.floor((e.target.offsetLeft - icoX) /100 ))*100 + 5 + 'px'
        console.log("ey");
        mouseUpicons(e);
    }
}

function mouseUpicons(e){
    document.removeEventListener('mousemove', mouseMoveicons)
    document.removeEventListener('mousedown', mouseDownicons)
    icoX = icostartX - e.clientX 
    icoY = icostartY - e.clientY 
        
    icostartX = e.clientX
    icostartY = e.clientY

    e.target.style.top = (Math.floor((e.target.offsetTop - icoY) /100))*100 + 10 +'px'
    e.target.style.left = (Math.floor((e.target.offsetLeft - icoX) /100 ))*100 + 5 + 'px'
    if(e.target == ico1){
        e.target.classList.remove('moving');
        console.log("back to normal 1")
    }
    else if(e.target == ico2){
        e.target.classList.remove('moving');
        console.log("back to normal 2")
    }
    else if(e.target == ico3){
        e.target.classList.remove('moving');
    }
    else if(e.target == ico4){
        e.target.classList.remove('moving');
    }
    else if(e.target == ico5){
        e.target.classList.remove('moving');
    }
    else if(e.target == ico6){
        e.target.classList.remove('moving');
    }
    else if(e.target == ico7){
        e.target.classList.remove('moving');
    }
    console.log("END");
}