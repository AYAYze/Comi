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
    console.log(json);
});


chrome.runtime.onMessage.addListener((message,sender) => {
    if(!message.switch) {
        console.log(message.switch, "종료합니다.");
    } else if(message.switch) {
        console.log(message.switch, "시작합니다.");
    }
});