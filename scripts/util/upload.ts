import address from './address'

function upload(text,pos){
    let date = new Date();
    let jsonDate = {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth(),
        date: date.getUTCDate(),
        hours: date.getUTCHours(),
        min: date.getUTCMinutes(),
        mili : date.getUTCMilliseconds()
    };
    
    let data = fetch(address + ':80/comments/', {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            pageUrl: document.location.hostname + document.location.pathname,
            txt: text,
            x: pos.x,
            y: pos.y,
            date: JSON.stringify(jsonDate)
            }
        )
    }).then(res =>{
        res.json()
        
    }
    )
}

export default upload;