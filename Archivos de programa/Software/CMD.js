console.log(totalapp)

let task = document.createElement("div")

function opensoftware(id, xcord, ycord, htmlint){
    totalapp++;
    if(document.getElementById('task' + totalapp) == null){
        task.id = id;
        task.style = `bottom:${ycord}px;left:${xcord}px`
        if(task.parentNode){
            task.parentNode.removeChild(task);
        }
        task.innerHTML = `<iframe src='Archivos de programa\Software${htmlint}'></iframe>`
        document.body.appendChild(task)
    }
}