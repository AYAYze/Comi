import upload from '../util/upload';
import getPost from '../util/getPost';

function uploadBox(pos, textbox,shadow){
    let upBox = document.createElement("button");
    upBox.id = "upBox";
    let newContent = document.createTextNode("작성완료");
    upBox.appendChild(newContent);

    upBox.onclick = ()=> {
        upload(textbox.value, pos)
        getPost(shadow);
        upBox.remove();
        textbox.remove();
    }

    let width = 55;
    let height = 30;
    upBox.style.position = "absolute";
    upBox.style.left = (pos.x - width - 5) + "px";
    upBox.style.top = pos.y + "px";
    upBox.style.width = width + "px";
    upBox.style.height = height + "px";

    return upBox;
}

export default uploadBox;