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
        
            var src0 = btns[0].firstChild.src;
            let src1 = btns[1].firstChild.src;
            let src2 = btns[2].firstChild.src;
            let src3 = btns[3].firstChild.src;
            let src4 = btns[4].firstChild.src;
            let src5 = btns[5].firstChild.src;
            let src6 = btns[6].firstChild.src;
            let src7 = btns[7].firstChild.src;
            let src8 = btns[8].firstChild.src;
            if (src0 === "http://127.0.0.1:5500/x.jpg" && src1 === "http://127.0.0.1:5500/x.jpg" && src2 === "http://127.0.0.1:5500/x.jpg"
            || src0 === "http://127.0.0.1:5500/o.jpg" && src1 === "http://127.0.0.1:5500/o.jpg" && src2 === "http://127.0.0.1:5500/o.jpg"
            || src3 === "http://127.0.0.1:5500/x.jpg" && src4 === "http://127.0.0.1:5500/x.jpg" && src5 === "http://127.0.0.1:5500/x.jpg"
            || src3 === "http://127.0.0.1:5500/o.jpg" && src4 === "http://127.0.0.1:5500/o.jpg" && src5 === "http://127.0.0.1:5500/o.jpg"
            || src6 === "http://127.0.0.1:5500/x.jpg" && src7 === "http://127.0.0.1:5500/x.jpg" && src8 === "http://127.0.0.1:5500/x.jpg"
            || src6 === "http://127.0.0.1:5500/o.jpg" && src7 === "http://127.0.0.1:5500/o.jpg" && src8 === "http://127.0.0.1:5500/o.jpg"
            || src0 === "http://127.0.0.1:5500/x.jpg" && src4 === "http://127.0.0.1:5500/x.jpg" && src8 === "http://127.0.0.1:5500/x.jpg"
            || src2 === "http://127.0.0.1:5500/x.jpg" && src4 === "http://127.0.0.1:5500/x.jpg" && src6 === "http://127.0.0.1:5500/x.jpg"
            || src0 === "http://127.0.0.1:5500/x.jpg" && src3 === "http://127.0.0.1:5500/x.jpg" && src6 === "http://127.0.0.1:5500/x.jpg"
            || src1 === "http://127.0.0.1:5500/x.jpg" && src4 === "http://127.0.0.1:5500/x.jpg" && src7 === "http://127.0.0.1:5500/x.jpg"
            || src2 === "http://127.0.0.1:5500/x.jpg" && src5 === "http://127.0.0.1:5500/x.jpg" && src8 === "http://127.0.0.1:5500/x.jpg"
            || src0 === "http://127.0.0.1:5500/o.jpg" && src4 === "http://127.0.0.1:5500/o.jpg" && src8 === "http://127.0.0.1:5500/o.jpg"
            || src2 === "http://127.0.0.1:5500/o.jpg" && src4 === "http://127.0.0.1:5500/o.jpg" && src6 === "http://127.0.0.1:5500/o.jpg"
            || src0 === "http://127.0.0.1:5500/o.jpg" && src3 === "http://127.0.0.1:5500/o.jpg" && src6 === "http://127.0.0.1:5500/o.jpg"
            || src1 === "http://127.0.0.1:5500/o.jpg" && src4 === "http://127.0.0.1:5500/o.jpg" && src7 === "http://127.0.0.1:5500/o.jpg"
            || src2 === "http://127.0.0.1:5500/o.jpg" && src5 === "http://127.0.0.1:5500/o.jpg" && src8 === "http://127.0.0.1:5500/o.jpg"){
                alert("hi")
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