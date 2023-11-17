let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img = document.querySelector(".images")
let goLeft = () => {
    img1.style.marginLeft = "60vw"
}
let goRight = () => {
    img3.style.marginRight = "60vw"
}
leftBtn.addEventListener("click", goLeft);
rightBtn.addEventListener("click", goRight);