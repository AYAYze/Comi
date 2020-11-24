function upload(text,pos){
    let data = fetch('http://comi.kro.kr:80/comments/', {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            pageUrl: document.location.href,
            txt: text,
            x: pos.x,
            y: pos.y,
            }
        )
    }).then(res =>
        res.json()
    )
}

export default upload;