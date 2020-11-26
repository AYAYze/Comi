function style(){
    //Create Element & Set element's attributes
    let styleDom = document.createElement("style");

    styleDom.textContent = `
        #writeBox {
            position: absolute;
            width:200px;
            font-size:15px;
            border: none;
            padding: 5px;
            z-index:10;
        }

        #postDom {
            width:200px;
            font-size:15px;
            border:none;
            border-radius:5px;
            padding:10px;
            background-color:black;
            color:white;
            z-index:10;
        }

        #upBox{
            background-color: #82e8e5;
            font-size:10px;
            border:none;
            z-index:10;
        }

        #dot {
            border-radius:5px;
            background-color:#FF8566;
            z-index:15

        }
    
    
    `
    

    return styleDom;
}

export default style;