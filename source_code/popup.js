//Creating necessary variables for reminders feature
let reminderArr = [];


function addReminder() {
    reminderArr.push("Event at set Time");
}

chrome.storage.sync.get(['reminderObj'], function(result) {
    console.log('Value currently is ' + result.reminderObj);
});

//Opening up Scheduling html page using webBtn id
var webButton = document.getElementById("webBtn");
webButton.onclick = function openWeb() 
{
    chrome.tabs.create({url: 'webpage.html'}, console.log("attempted html page open"));
}

