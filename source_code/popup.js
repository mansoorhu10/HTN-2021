//Opening up Scheduling html page using webBtn
var webButton = document.getElementById("webBtn");
webButton.onclick = function openWeb() 
{
    chrome.tabs.create({url: 'webpage.html'});
}