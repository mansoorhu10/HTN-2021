eventsTable = document.querySelector("#eventsTable");
createTaskBtn = document.querySelector("#createTaskBtn");
taskDate = document.querySelector("#taskDate");
taskTime = document.querySelector("#taskTime");

let id = 0;
let qwer = [];
let task_list = {};


createTaskBtn.addEventListener("click", newEvent);

function Event(id, eventName, date, time){
    this.id = id;
    this.eventName = eventName;
    this.date = date;
    this.time = time;
}

function newEvent(){
    let eventA = new Event(id, taskName.value, taskDate.value, taskTime.value);
    qwer.push(eventA);
    displayTask(eventA);
    id++;
}



function displayTask(newEvent){
    table = document.querySelector("#eventsTable");

    let newRow = table.insertRow();
    newRow.setAttribute("id", newRowID);

    let eventNameCol = newRow.insertCell();
    eventNameCol.appendChild(document.createTextNode(newEvent.eventName));


    let reminderDate = newRow.insertCell();
    reminderDate.appendChild(document.createTextNode(newEvent.date));


    let reminderTime = newRow.insertCell();
    reminderTime.appendChild(document.createTextNode(newEvent.time));


    let deleteTaskBtn = newRow.insertCell();
    let newButton = document.createElement("Button");
    newButton.innerHTML = "Delete Task";
    deleteTaskBtn.appendChild(newButton);
    let stringID = (String) (newEvent.id);
    deleteTaskBtn.setAttribute("id", stringID);
    deleteTaskBtn.addEventListener("click", clearRow(id, newRowID));


}

function clearRow(id){
    newRowID.deleteRow(id);

}



