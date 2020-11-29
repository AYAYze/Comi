import postDom from '../doms/postDom';
import tools from '../doms/tools';
import address from './address'

function getPost(shadow) {
    let data = fetch(address + ':80/getpost/', {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
            pageUrl: document.location.hostname + document.location.pathname
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
            let dom = postDom(posts.txt, xy);
            shadow.appendChild(dom);
            shadow.appendChild(tools(xy, dom));
        })
    });
}

export default getPost;