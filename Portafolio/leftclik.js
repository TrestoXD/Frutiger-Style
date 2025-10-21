oncontextmenu = (e) => {
    e.preventDefault()
    let menu = document.createElement("div")
    menu.id = "rightmenu"
    menu.style = `top:${e.pageY-10}px;left:${e.pageX-40}px`
    menu.onmouseleave = () => rightmenu.outerHTML = ''
    menu.innerHTML = "<p>Open</p><p>Add to Zip</p><hr></hr> <p>Send To</p> <hr></hr> <p>Cut</p><p>Copy</p> <hr></hr> <p>Create Shotcut</p> <p>Delete</p> <p>Rename</p> <hr></hr> <p>Properties</p>"
    document.body.appendChild(menu)
}