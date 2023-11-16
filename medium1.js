let changingText = document.getElementById("changeText");
let text = document.getElementById("text")
function changingTextArea() {
    text.innerText = "Hello"
}
changingText.addEventListener("click", changingTextArea)