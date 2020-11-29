function shutdown(swit){
    
    if(!swit){
        chrome.browserAction.setIcon({
            path : {
                "16": "../icons/16_gray.png"
            }
        });
        (<HTMLInputElement>document.getElementById("shutdown")).value = "켜기";
    }
    else if(swit){
        chrome.browserAction.setIcon({
            path : {
                "16" : "../icons/16.png"
            }
        });
        (<HTMLInputElement>document.getElementById("shutdown")).value = "끄기";
    }
}

export default shutdown;