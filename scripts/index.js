import createBox from './doms/createBox.js';
import uploadBox from './doms/uploadBox.js';
import tools from './doms/tools.js';
import getPost from './util/getPost.js';



//Create Shadow Dom
let container = document.createElement("div");
container.style.height="500px"
document.body.appendChild(container);
let shadow = container.attachShadow({mode: 'closed'});

getPost(shadow);

//Write Community content
function writeStart(event) {
    console.log(event.pageX, event.pageY);
    let xy = {
        x : event.pageX,
        y : event.pageY
    }
    
    let dom = createBox(xy);
    
    //Write Box
    shadow.appendChild(dom);
    //Upload Box
    shadow.appendChild(uploadBox(xy, dom));
    dom.focus();


    //Remove Event 
    document.body.removeEventListener("click", writeStart, true);
}



chrome.runtime.onMessage.addListener((message,sender) => {
    //Start or Shutdown Program
    if(message.switch == false) {
        console.log(message.switch, "종료합니다.");
    } else if(message.switch == true) {
        console.log(message.switch, "시작합니다.");
    }

    //Writing
    if(message.write == true) {
        document.body.removeEventListener("click", writeStart)
        document.body.addEventListener("click", writeStart,true);
    }
});

