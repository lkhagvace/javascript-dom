let initBox = document.getElementById("initBox");
let boxContainer = document.getElementById("boxes")
let array = [];
let dividing = () => {
    for (let i = 0; i < 2; i++){
        let width = initBox.offsetWidth / 2
        let height = initBox.offsetHeight / 2
        let box = document.createElement("div")
        box.classList.add("box")
        box.style.height = Number(`${height}`)
        box.offsetWidth = Number(`${width}`)
        console.log(box.offsetHeight)
    }
}
console.log(array)
initBox.addEventListener("click", dividing)


