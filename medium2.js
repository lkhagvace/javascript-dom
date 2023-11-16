let square = document.getElementById("square");
let btn = document.getElementById("change-color-btn")
square.style.backgroundColor = "green"
    let changaIntoRed = () => {
        square.style.backgroundColor = "red"
    }
btn.addEventListener("click", changaIntoRed)