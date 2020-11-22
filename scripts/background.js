//SWITCH ON / OFF
let status = true;

/*
chrome.browserAction.onClicked.addListener((tabs)=>{
    status = !status;
    chrome.tabs.sendMessage(tabs.id ,{switch:status});
    if(!status) 
        chrome.browserAction.setIcon({
            path : {
                "16":"../icons/16_gray.png"
            }
        });
    else if(status)
        chrome.browserAction.setIcon({
            path : {
                "16":"../icons/16.png"
            }
        });
})
//

*/

function shutdown(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        status = !status;
        chrome.tabs.sendMessage(tabs[0].id, {switch:status});
        if(!status){
            chrome.browserAction.setIcon({
                path : {
                    "16": "../icons/16_gray.png"
                }
            });
            document.getElementById("shutdown").value = "켜기";
        }
        else if(status){
            chrome.browserAction.setIcon({
                path : {
                    "16" : "../icons/16.png"
                }
            });
            document.getElementById("shutdown").value = "끄기";
        }
    });
    
}
document.getElementById("shutdown").onclick = shutdown;



function startWrite(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {write: true});
    });
    
    document.getElementById("write").style.backgroundColor = "red";
}
document.getElementById("write").onclick = startWrite;

//if WriteDone change color
chrome.runtime.onMessage.addListener((msg, sender, sendRes) =>{
    if(msg == 'WriteDone') {
        document.getElementById("write").style.backgroundColor = "rgb(186, 174, 214)";
    }
})