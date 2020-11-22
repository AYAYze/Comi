import upload from '../util/upload.js';

function uploadBox(pos, textbox){
    let upBox = document.createElement("button");
    let newContent = document.createTextNode("작성완료");
    upBox.appendChild(newContent);
    upBox.onclick = ()=> {
        upload(textbox.value, pos )
        upBox.style.display = "none";
        textbox.disabled = true;
    }

    let width = 55;
    let height = 30;
    upBox.style.position = "absolute";
    upBox.style.left = (pos.x - width - 5) + "px";
    upBox.style.top = pos.y + "px";
    upBox.style.width = width + "px";
    upBox.style.height = height + "px";
    upBox.style.backgroundColor = "#82e8e5";
    upBox.style.fontSize = "10px";
    upBox.style.border = "none";

    return upBox;
}

export default uploadBox;