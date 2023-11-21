let rows = 3;
let columns = 3;
var chosenImg;
var otherImg;
var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
window.onload = function() {
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++){
            let img = document.createElement("img");
            img.id = r.toString() + "-" + c.toString();
            img.src = imgOrder.shift() + ".jpg";
            img.addEventListener("dragstart", dragStart);
            img.addEventListener("dragover", dragOver);
            img.addEventListener("dragenter", dragEnter);
            img.addEventListener("dragleave", dragLeave);
            img.addEventListener("drop", dragDrop);
            img.addEventListener("dragend", dragEnd);
            document.getElementById("puzzle").append(img);
        }
    }
}
function dragStart(){
    chosenImg = this
}
function dragOver(e){
    e.preventDefauld();
}
function dragEnter(e){
    e.preventDefauld();
}
function dragLeave(){

}
function dragDrop(){
    otherImg = this;
}
function dragEnd(){
    let currCoords = cu
    let chosenTile = chosenImg.src;
    let otherTile = otherImg.src;
    chosenImg.src = otherTile;
    otherImg.src = chosenTile;
}
