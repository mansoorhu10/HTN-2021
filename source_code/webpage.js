
eventsTable = document.querySelector("#eventsTable");
createTaskBtn = document.querySelector("#createTaskBtn");
taskDate = document.querySelector("#taskDate");
taskTime = document.querySelector("#taskTime");
taskName = document.querySelector("#taskName");

let id = 1;
globalStorage = [];
let qwer = [];

const headingRow = document.createElement("tr");
headingRow.setAttribute("id", "heading");
const reminder = document.createElement("th");
reminder.textContent = "Reminder Name";
const date = document.createElement("date");
date.textContent = "date";
const time = document.createElement("th");
time.textContent = "time";
const shortDes = document.createElement("th");
shortDes.textContent


headingRow.appendChild(reminder);
headingRow.appendChild(date);
headingRow.appendChild(time);
qwer.push(headingRow);

let task_list = {};


createTaskBtn.addEventListener("click", newEvent);

function Event(id, eventName, date, time){ 
    this.id = id;
    this.eventName = eventName;
    this.date = date;
    this.time = time;
}

function newEvent(){
    let newEvent = new Event(id, taskName.value, taskDate.value, taskTime.value);
    globalStorage.push(newEvent);
    displayTask(newEvent);
    id++;
}



function displayTask(newEvent){
    table = document.querySelector("#eventsTable");
    let newRowID = "event" + newEvent.id;
    console.log(newRowID);
    let newRow = table.insertRow();
    newRow.setAttribute("id", newRowID);
    newRow.classList.add("task-row");
    console.log(newRow);
    console.log(newRow.getAttribute("id"));
    qwer.push(newRow);

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
    console.log(stringID);
    deleteTaskBtn.setAttribute("id", stringID);
    deleteTaskBtn.addEventListener('click', click_value);

    function click_value(){
  
    
        let idNum = Number(this.id);
        console.log(qwer.time);
        
        globalStorage.splice(idNum);
        

        qwer = qwer.filter((e) => `event${idNum}` !== e.getAttribute("id"));
        const tableTarget = document.querySelector("#tableTarget");
        removeAllChildNodes(tableTarget);
        for(let i = 0; i < qwer.length; i++){
            tableTarget.appendChild(qwer[i]);
        }
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// globalStorage[i].date or .time or .eventName

let globalValues = {globalEventData, globalDateData, globalTimeData};

function getGlobals () {
    for (let i = 0; i < globalStorage.length; i++){
        if(globalStorage[i] != isNull){
            
        }
    }
}



