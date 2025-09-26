const Bar = document.querySelectorAll(".pane");
let offsetX, offsetY;

const move = (e) => {
    Bar.style.left = `${e.clientX - offsetX}px`;
    Bar.style.top = `${e.clientY - offsetY}px`;
}

Bar.addEventListener("mousedown", (e) => {

    offsetX = e.clientX - Bar.offsetLeft;
    offsetY = e.clientY - Bar.offsetTop;
    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
});