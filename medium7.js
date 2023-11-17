let addTaskBtn = document.getElementById("addMis");
let input = document.getElementById("input");
let deleteBtn = document.getElementById("delete");
let ListContainer = document.getElementsByClassName("missions")
let mission = document.getElementById("mission")
console.log(mission)
let array = [];
let addingTask = () => {
    let displayingTasks = document.createElement("div");
    displayingTasks.classList.add("displayingTasks")
    displayingTasks.innerText = input.value;
    mission.appendChild(displayingTasks)
    array.push(displayingTasks)
}
let deletingTask = () => {
    for(let i = 0; i <= array.length; i++){
        mission.remove(array[i])
    }
}
addTaskBtn.addEventListener("click", addingTask)
deleteBtn.addEventListener("click", deletingTask)