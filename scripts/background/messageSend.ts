function messageSend(act: boolean , cur: boolean, msgObj:object, callback?){
    chrome.tabs.query({active: act, currentWindow: cur}, tabs=>{
        chrome.tabs.sendMessage(tabs[0].id, msgObj, callback);
    });
}

export default messageSend;