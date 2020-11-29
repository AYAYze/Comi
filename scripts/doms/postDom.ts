function postDom(text,pos){
    //Create Element & Set element's attributes
    let newDiv = document.createElement("input");

    newDiv.value = text;
    newDiv.disabled = true;
    newDiv.id = "postDom"

    //Style
    newDiv.style.position = "absolute";
    newDiv.style.left = pos.x + "px";
    newDiv.style.top = pos.y + "px";
    

    return newDiv;
}

export default postDom;