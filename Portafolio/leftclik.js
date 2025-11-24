oncontextmenu = (e) => {
    let rightmenudiv = document.getElementById("rightmenu");
    if(rightmenudiv === null){
        e.preventDefault();
        let menu = document.createElement("div")
        menu.id = "rightmenu"
        menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
        if(menu.parentNode){
            menu.parentNode.removeChild(menu);
        }
        menu.onmouseleave = () => rightmenu.outerHTML = '', onmenu = false;
        if(e.target.closest(".item-papelera"))
            if(e.target.closest("#icos1")){
                        menu.innerHTML = "<p>Explore</p><p>Open</p><p>Print</p><p>Empty Recycle Bin</p> <hr></hr> <p>Paste</p> <hr></hr> <p>Create Shortcut</p> <hr></hr> <p>Properties</p>"
            }
            else{
        menu.innerHTML = "<p>Open</p><p>Add to Zip</p><hr></hr> <p>Send To</p> <hr></hr> <p>Cut</p><p>Copy</p> <hr></hr> <p>Create Shotcut</p> <p>Delete</p> <p>Rename</p> <hr></hr> <p>Properties</p>"}
        else{
        menu.innerHTML = "<p>Arrange Icons</p><p>Line Up Icons</p> <hr></hr> <p>Paste</p><p>Paste Shortcut</p><p>Undo Delete</p> <hr></hr> <p>New</p> <hr></hr> <p>Properties</p>"
        }
        document.body.appendChild(menu)
    }
}

