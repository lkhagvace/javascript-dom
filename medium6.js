let shapes = document.createElement("div")
shapes.classList.add("shapes");
document.body.appendChild(shapes);
let convertTriangle = () => {
    let d = shapes;
    d.style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)"
}
let convertCircle = () => {
    shapes.style.borderRadius = "50%"
}
shapes.addEventListener("dblclick", convertTriangle);
shapes.addEventListener("click", convertCircle);