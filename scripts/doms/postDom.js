function postDom(text,pos){
    //Create Element & Set element's attributes
    let newDiv = document.createElement("input");

    newDiv.value = text;
    newDiv.disabled = true;

    //Style
    newDiv.style.position = "absolute";
    newDiv.style.left = pos.x + "px";
    newDiv.style.top = pos.y + "px";
    newDiv.style.width = "200px";
    newDiv.style.fontSize = "15px";
    newDiv.style.border = "none";
    newDiv.style.padding = "5px";
    

    return newDiv;
}

export default postDom;