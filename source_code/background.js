console.log("background running");

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
    temp = total_time_sec%3600
    var hour = (total_time_sec-temp)/3600;
    total_time_sec = total_time_sec-(hour*3600);
    temp = total_time_sec%60
    var min = (total_time_sec-temp)/60;
    total_time_sec = total_time_sec-(min*60);
    var sec = total_time_sec;

    return date + " day(s) " + hour + " hour(s) " + min + " minute(s) " + sec + " second(s)"; 
}

function taskAdder(task_name, due_date, time_difference){
    
}
let task_name = [];
let due_date = ["09/19/2021/2:45:00AM"]; //import due dates into this array
let urgency = []; //change into objects with tasks as keys and time as property


if(task_name.length == due_date.length){
    for(let i = 0; i < due_date.length; i++){
        //let task = taskAdder(task_name[i], due_date[i])
        //urgency.push(timeDifference(due_date[i], currentTimeCalculator(Date.now())))
    }
}


urgency.sort();



chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({
            url: 'webpage.html'
        });
        
    }
});

var reminderArr = ["hello this is a test", "hi"];
let reminderObj = {};

chrome.storage.sync.set({reminderObj: reminderArr}, function() {
    console.log('Value is set to ' + reminderArr);
});

