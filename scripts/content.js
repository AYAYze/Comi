let data = fetch('http://localhost:80/comments/', {
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({pageUrl: document.location.href})
}).then(res =>
    res.json()
).then(json => {
    console.log(json.ang);
});


function createBox(pos){
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode("대충 작성중~");
    newDiv.appendChild(newContent);
    newDiv.style.position = "absolute";
    newDiv.style.left = pos.x + "px";
    newDiv.style.top = pos.y + "px";
    


    return newDiv;
}

//Write Community content
function writeStart(event) {
    console.log(event.pageX, event.pageY);
    let xy = {
        x : event.pageX,
        y : event.pageY
    }
    document.body.appendChild(createBox(xy));

    //Remove Event 
    document.body.removeEventListener("click", writeStart, true);
    //다시 키면 리로딩되는듯.
    //chrome.runtime.sendMessage('WriteDone');
}

chrome.runtime.onMessage.addListener((message,sender) => {
    //Start or Shutdown Program
    if(message.switch == false) {
        console.log(message.switch, "종료합니다.");
    } else if(message.switch == true) {
        console.log(message.switch, "시작합니다.");
    }

    //Writing
    if(message.write == true) {
        document.body.removeEventListener("click", writeStart)
        document.body.addEventListener("click", writeStart,true);
    }
});

