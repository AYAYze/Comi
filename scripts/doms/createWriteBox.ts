interface pos {
    x: number,
    y: number
}

function createWriteBox(pos : pos){
    //Create Element & Set element's attributes
    let newDiv = document.createElement("input");

    newDiv.placeholder = "글을 작성해주세요";
    newDiv.id = "writeBox";
    newDiv.addEventListener('keydown', e=>{
        e.stopPropagation();
    });

    //Style
    newDiv.style.position = "absolute";
    newDiv.style.left = pos.x + "px";
    newDiv.style.top = pos.y + "px";

    return newDiv;
}

export default createWriteBox;
