let btn = document.getElementById("btn");
let input = document.getElementById("input")
let generator = () => {
    let value = Number(input.value)
    for (let i = 0; i < value; i++){
        const circle = document.createElement("div");
        circle.classList.add("circle")
        document.body.appendChild(circle)
        let temp1 = 73 - i * 6;
        let temp2 = 218 - i * 6;
        let temp3 = 218 - i * 6;
        circle.style.backgroundColor = (`rgb(${temp1}, ${temp2}, ${temp3})`)
    }
}
btn.addEventListener("click", generator);