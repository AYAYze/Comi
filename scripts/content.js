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
    //Create Element & Set element's attributes
    let newDiv = document.createElement("input");
    //let newContent = document.createTextNode("대충 작성중~");
    //newDiv.appendChild(newContent);
    newDiv.placeholder = "글을 작성해주세요";


    //Style
    newDiv.style.position = "absolute";
    newDiv.style.left = pos.x + "px";
    newDiv.style.top = pos.y + "px";
    newDiv.style.width = "200px";
    newDiv.style.fontSize = "15px";


    return newDiv;
}

//Write Community content
function writeStart(event) {
    console.log(event.pageX, event.pageY);
    let xy = {
        x : event.pageX,
        y : event.pageY
    }
    
    let dom = createBox(xy);
    document.body.appendChild(dom);
    dom.focus();
    

    
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

