let img = document.getElementsByClassName("img");
let destination;
let chosen;
for (let i = 0; i < img.length; i++){
    chosen.addEventListener("dragstart", dragStart);
    img[i].addEventListener("dragover", dragOver);
    img[i].addEventListener("dragenter", dragEnter);
    img[i].addEventListener("dragleave", dragLeave);
    img[i].addEventListener("drop", dragDrop);
    img[i].addEventListener("dragend", dragEnd);
}
let dragStart  = () => chosen = this;
let dragOver  = (e) => e.preventDefault()
let dragEnter = (e) => e.preventDefault()
let dragLeave = () => {

    }
let dragDrop = () => {
        destination = this
    }
let dragEnd = () => {
    console.log(destination, chosen)
    let moveRight = () => {
            alert("baruun");
            let d = chosen.src;
            let f = destination.src
            chosen.src = f;
            destination.src = d;

        }
    moveRight();
    }