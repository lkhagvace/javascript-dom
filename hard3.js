let container = document.getElementById("container");
let btns = document.getElementsByClassName("btn");
let click = 0
for (let i = 0; i < 9; i++){
    let gameStart = () => {
        click++
        if (click % 2 != 0){
            let imgX = document.createElement("img");
            imgX.src = "x.jpg"
            btns[i].appendChild(imgX);

            console.log(typeof btns[0].firstChild.src);
            console.log(typeof btns[1].firstChild.src);
            console.log(typeof btns[2].firstChild.src)
            if (btns[0].firstChild.src == btns[1].firstChild.src == btns[2].firstChild.src){
                alert("you won")
            }
        }
        if (click % 2 == 0) {
            let imgO = document.createElement("img")
            imgO.src = "o.jpg"
            btns[i].appendChild(imgO)
        }
    }
    btns[i].addEventListener("click", gameStart)
}