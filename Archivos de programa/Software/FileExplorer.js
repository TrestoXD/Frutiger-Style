let arrofarr =
[
    [], //The Name of the buttons
    [] //The Type Of buttons
]
let interior = [];
let interiormounted = "";
let url = "";

function ChangeExplorer(arrofarr){
    console.log(arrofarr[0][1])
    MountExplorer(arrofarr);
    console.log(interior[0])
    document.getElementById("files-explorer").innerHTML = interiormounted;
}

function MountExplorer(arred){
    for (let i = 0; i < arred[1].length; i++) {
        if(arred[1][i] == 10){
            url = `https://www.curseforge.com/minecraft/modpacks/${arred[0][i]}`
        }else if(arred[1][i] == 11){
            url = `https://www.curseforge.com/minecraft/texturepacks/${arred[0][i]}`
        }else if(arred[1][i] == 11){
            url = `https://www.curseforge.com/minecraft/mc-mods/${arred[0][i]}`
        }
        interior[i] = `<button class='files-explorer-items' onclick='window.open("${url}")'> <img draggable="false" src="./Images/Icons/w95_20.ico"> <p>${arred[0][i]}</p> </button>`
    }
    for (let o = 0; o < arred[1].length; o++) {
        interiormounted += interior[o];
    }
}