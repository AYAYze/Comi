//SWITCH ON / OFF
let status = true;

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