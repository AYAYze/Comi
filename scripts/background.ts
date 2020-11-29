import shutdown from './background/shutdown';
import reload from './background/reload';
import messageSend from './background/messageSend';

//true면 켜지고 false 면 꺼집니다.
document.getElementById("shutdown").onclick = (()=>{
    messageSend(true,true, {swit:true}, (data)=>{
        if(!data) {
            shutdown(false)
        }
        else if(data) {
            shutdown(true)
        }
    })
});


function startWrite(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {write: true});
    });
    messageSend(true,true,{write:true})
    document.getElementById("write").style.backgroundColor = "red";
}
document.getElementById("write").onclick = startWrite;

document.getElementById("reload").onclick = reload;


function exhibition(){
    let value = (<HTMLInputElement>document.getElementById("exhibition")).value;
    
}

document.getElementById("exhibition").oninput = exhibition;