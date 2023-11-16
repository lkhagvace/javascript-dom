let checkBtn = document.getElementById("checkBtn");
let input = document.getElementById("input");
let fruitsArray = ['apple', 'banana', 'cherry', 'grape', 'watermelon'];
let FAChecker = [];
let dynamicChecker = () => {
    for(let i = 0; i < fruitsArray.length; i++){
        for (let j = 0; j < 2; j++){
            FAChecker = fruitsArray[i][0] + fruitsArray[i][1]
        }
        if (FAChecker === input.value){
            let suitAbleElements = document.createElement("div");
            suitAbleElements.classList.add("suitAbleElements")
            suitAbleElements.innerText = fruitsArray[i]
            document.body.appendChild(suitAbleElements)
        }
    }
}

checkBtn.addEventListener("click", dynamicChecker);