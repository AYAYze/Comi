const ws = new WebSocket("ws://localhost:54160");

ws.onopen = (event=>{
    ws.send("값 줘 시발아")
})

ws.onmessage = event => {
    console.log(event.data);
}

//console.log(chrome.i18n.getMessage("first"));