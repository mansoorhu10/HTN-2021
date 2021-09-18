
eventsTable = document.querySelector("#eventsTable");
createTaskBtn = document.querySelector("#createTaskBtn");
taskDate = document.querySelector("#taskDate");
taskTime = document.querySelector("#taskTime");
taskName = document.querySelector("#taskName");

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

    let newEvent = new Event(id, taskName.value, taskDate.value, taskTime.value);
    qwer.push(newEvent);
    displayTask(newEvent);
    id++;
}





function displayTask(newEvent){
    table = document.querySelector("#eventsTable");

    let newRowID = "event" + newEvent.id;
    console.log(newRowID);
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
    console.log(stringID);
    deleteTaskBtn.setAttribute("id", stringID);
    deleteTaskBtn.addEventListener('click', click_value);

    function click_value(){
        let idNum = Number(this.id);
        if(idNum == 0){
            alert("Error");
        }else{
            eventsTable.deleteRow(idNum + 1);
            const index = qwer.indexOf(idNum);
            qwer.splice
        }
        // for(let i = 0; i < qwer.length; i++){
        //     if(qwer[i].id > idNum){
                
        //         console.log(qwer[i].id + "on the bottom");
        //     }
        // }
        id = id - 1;
    }
}




