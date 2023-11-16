let changeColorBtn = document.getElementById("ChangeBG");
let changingBackgroundColor = () => {
    document.body.style.backgroundColor = 
    'rgb(' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'
}
changeColorBtn.addEventListener("click", changingBackgroundColor);