function createBox(pos){
    //Create Element & Set element's attributes
    let newDiv = document.createElement("input");

    newDiv.placeholder = "글을 작성해주세요";


    //Style
    newDiv.style.position = "absolute";
    newDiv.style.left = pos.x + "px";
    newDiv.style.top = pos.y + "px";
    newDiv.style.width = "200px";
    newDiv.style.fontSize = "15px";


    return newDiv;
}

export default createBox;