import postDom from '../doms/postDom.js';

function getPost(shadow) {
    let data = fetch('http://comi.kro.kr:80/getpost/', {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            pageUrl: document.location.href
            }
        )
    }).then(res =>
        res.json()
    ).then(json => {
        json.data.forEach(posts => {
            let xy = {
                x: posts.x,
                y: posts.y
            }
            shadow.appendChild(postDom(posts.txt, xy));
        })
    });
}

export default getPost;

// getPost().forEach(posts =>{
//     let xy = {
//         x: posts.x,
//         y: posts.y
//     }
//     postDom(posts.txt, xy);
// });