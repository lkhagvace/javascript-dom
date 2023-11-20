let containerDiv = document.getElementById("boxes");
let boxDiv = document.querySelectorAll(".box");
for (let i = 0; i < boxDiv.length; i++){
    console.log(boxDiv);
    let dividing = () => {
        console.log("clicked on other boxes");
        for (let j = 0; j < 2; j++){
            let box = document.createElement("div");
            box.classList.add("box");
            containerDiv.appendChild(box);
            box.style.backgroundColor = 
            'rgb(' + Math.round(Math.random() * 255) +
            ',' + Math.round(Math.random() * 255) +
            ',' + Math.round(Math.random() * 255) + ')'
        }
    }
    console.log(typeof boxDiv);
    boxDiv[i].addEventListener("click", dividing)
}
