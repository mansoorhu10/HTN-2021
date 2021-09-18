console.log("background test in progress");

function currentTimeCalculator(UNIX_timestamp){ //UNIX_timestamp = Date.now();
    var current_time = new Date(UNIX_timestamp);
    return current_time;
}

function timeDifference(due_date, current_time){ //To accurately measure time until due date
    var date1 = current_time;
    var date2 = new Date(due_date);

    var time_difference = Math.floor((date2 - date1)/1000);

    return time_difference; //This will be in terms of seconds until due date
}

function timeConverter(total_time_sec){ //call this function to convert into days, hours, mins and seconds
    temp = total_time_sec %86400;
    var date = (total_time_sec-temp)/86400;
    total_time_sec = total_time_sec-(date*86400);
    
    temp = total_time_sec%3600;
    var hour = (total_time_sec-temp)/3600;
    total_time_sec = total_time_sec-(hour*3600);
   
    temp = total_time_sec%60;
    var min = (total_time_sec-temp)/60;
    total_time_sec = total_time_sec-(min*60);
    
    var sec = total_time_sec;

    return date + " day(s) " + hour + " hour(s) " + min + " minute(s) " + sec + " second(s)"; 
}

function taskAdder(task_name, due_date, time_difference){
    temp.taskName = task_name;
    temp.dueDate = due_date;
    temp.timeDifference = time_difference;
    return temp;
}
let task_name = ["Math homework", "Chemistry test", "Physics assignment"];
let due_date = ["09/25/2021/14:45:00", "09/31/2021/21:00:00", "09/21/2021/23:59:00"]; //import due dates into this array
let urgency = [' ']; 
let temp = {};
console.log(urgency);

(async function(){
    if(task_name.length == due_date.length){
        for(let i = 0; i < due_date.length; i++){
            let task = await taskAdder(task_name[i], due_date[i], timeDifference(due_date[i], currentTimeCalculator(Date.now())));
            await urgency.push(task);
            console.log(task);
        }
    }
})



//urgency.sort();
console.log(urgency);


chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: 'webpage.html'
        });
        
    }
});

var reminderArr = ["date","blah blah", "time"];
let reminderObj = {};

chrome.storage.sync.set({reminderObj: reminderArr}, function() {
    console.log('Value is set to ' + reminderArr);
});


chrome.alarms.onAlarm.addListener(function(alarm) {
    console.log("Alarm Fired");
    chrome.storage.sync.get(['reminderObj'], function(result) {
        console.log('Value currently is ' + result.reminderObj);
        alert(result.reminderObj);
        });
})