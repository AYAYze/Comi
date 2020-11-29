function tools(pos, element){
    let dot = document.createElement("div");
    dot.id = "dot";

    dot.onclick = ()=>{
        element.remove();
        dot.remove();
    }


    let width = 10;
    let height = 10;
    //Style
    dot.style.position = "absolute";
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.left = pos.x - (width / 2) + "px";
    dot.style.top = pos.y - (height / 2) + "px";



    return dot;
}

export default tools;
