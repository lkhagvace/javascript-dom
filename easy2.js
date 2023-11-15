let input1 = document.getElementById("1r-nemegdehuun");
let input2 = document.getElementById("2r-nemegdehuun");
const inputSum = document.getElementById("niilber");
const check = document.getElementById("check");
const refresh = document.getElementById("refresh");
let GivingRandomNumber = () => {
    input1 = Math.floor((Math.random() * 100) + 1);
    input2 = Math.floor((Math.random() * 100) + 1);
}



let checkingCalculator = () => {
    var valueOfInput1 = input1.value * 1;
    var valueOfInput2 = input2.value * 1;
    let correctSumOfNums = 0;
    let niilberNum = inputSum.value * 1;
    correctSumOfNums = valueOfInput1 + valueOfInput2;
    if (niilberNum === correctSumOfNums) alert("Correct answer!!!")
    else alert("wrong answer!!!")
}

check.addEventListener("click", checkingCalculator);
refresh.addEventListener("click", GivingRandomNumber);