function tools(pos){
    let dot = document.createElement("div");
    

    //Style
    dot.style.position = "absolute";
    dot.style.left = pos.x + "px";
    dot.style.top = pos.y + "px";
    dot.style.width = "5px";
    dot.style.height = "5px";
    dot.style.borderRadius = "5px";
    dot.style.backgroundColor = "orange";

    return dot;
}

export default tools;
