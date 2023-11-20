let img = document.getElementsByClassName("img")
for (let i = 0; i < 2; i++){
    let dragEnd = () => {
        
    }
    img.addEventListener("dragstart", dragStart = () => img[i] = this);
    img.addEventListener("dragover", dragOver = (e) => e.preventDefault());
    img.addEventListener("dragenter", dragEnter = (e) => e.preventDefault());
    img.addEventListener("dragleave", dragLeave);
    img.addEventListener("drop", dragDrop = () => img[i] = this);
    img.addEventListener("dragend", dragEnd);
}