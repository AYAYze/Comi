const WebSocket = require('ws');
const PORT = 54160;

const ws = new WebSocket.Server({port : PORT});

let db = "여깄다 개새리야"
ws.on('connection', w=>{
    w.on('message', msg =>{
        if(msg == "값 줘 시발아") {
            console.log("Requested")
            w.send(db);
        }
    })
});