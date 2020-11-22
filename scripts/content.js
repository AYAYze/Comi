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

function setXY(event) {
    console.log(event.pageX, event.pageY);
    document.body.removeEventListener("click", setXY)
}

chrome.runtime.onMessage.addListener((message,sender) => {
    if(message.switch == false) {
        console.log(message.switch, "종료합니다.");
    } else if(message.switch == true) {
        console.log(message.switch, "시작합니다.");
    }
    
    //쓰기
    if(message.write == true) {
        console.log('ON');
        document.body.addEventListener("click", setXY, false);
    }
});

