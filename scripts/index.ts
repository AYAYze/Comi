import createWriteBox from './doms/createWriteBox';
import uploadBox from './doms/uploadBox';
import tools from './doms/tools';
import getPost from './util/getPost';
import styleDom from './util/style';


//Create Shadow Dom
let container = document.createElement("div");
container.style.height="500px"
container.style.position = "absolute";
container.style.top = "0px";
container.style.left = "0px";
document.body.appendChild(container);
let shadow = container.attachShadow({mode: 'closed'});
shadow.appendChild(styleDom());

getPost(shadow);

//Write Community content
function writeStart(event) {
    let xy = {
        x : event.pageX,
        y : event.pageY
    }
    
    let dom = createWriteBox(xy);
    
    //Write Box
    shadow.appendChild(dom);
    //Upload Box
    shadow.appendChild(uploadBox(xy, dom,shadow));
    dom.focus();


    //Remove Event 
    document.body.removeEventListener("click", writeStart, true);
}


let swit = true;
chrome.runtime.onMessage.addListener((message,sender,sendResponse) => {
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

    if(message.reload == true){
        getPost(shadow);
    }

    if(message.swit == true){
        swit = !swit;
        sendResponse(swit);
        
    }
});

