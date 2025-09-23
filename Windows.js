dragElement(document.getElementById("Window"));

function dragElement(element){
    let initialX = 0;
    let initialY = 0;
    let currentX = 0;
    let currentY = 0;
}

function startDragging(e){
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY
}