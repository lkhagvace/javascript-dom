let container = document.getElementById("puzzle");
let img = document.getElementsByClassName("images");
let rows = 3;
let coumns = 3;
for (let i = 0; i < img.length; i++){
        let dragStart = () => {
            img[i] = this;
        }
        let dragOver = (e) => {
            e.preventDefault()
        }
        let dragEnter = (e) => {
            e.preventDefault()
        }
        let dragLeave = () => {
                
        }
                
        let dragDrop = () => {
            img[i + 1] = this
        }
        console.log(img[i].src)
                
        let dragEnd = () => {
            let utga1 = img[i].src;
            let utga2 = img[i + 1].src;
            img[i].src = utga2;
            img[i + 1].src = utga1
        }
        img[i].addEventListener("dragstart", dragStart);
        img[i].addEventListener("dragover", dragOver);
        img[i].addEventListener("dragenter", dragEnter);
        img[i].addEventListener("dragleave", dragLeave);
        img[i].addEventListener("drop", dragDrop);
        img[i].addEventListener("dragend", dragEnd);
}
