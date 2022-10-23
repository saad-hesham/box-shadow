import { Component } from "react";

class Home extends Component{
    componentDidMount() {
     

 //variables
 let parentValue ="";
 let text = document.getElementById("text");
 let box = document.getElementById("box");
let inputHorizon = document.getElementById("input-horizon");
let spandhorizon = document.getElementById("spandhorizon");


let inputvertical = document.getElementById("input-vertical");
let spandvertcal = document.getElementById("span-vertical");


let BlurRaduis = document.getElementById("input-BlurRaduis");
let spanBlurRaduis = document.getElementById("span-BlurRaduis");

let SpreadRadius = document.getElementById("input-SpreadRadius");
let spanSpreadRadius = document.getElementById("span-SpreadRadius");

let color = document.getElementById("color-input");
let colorSpan = document.getElementById("color-span");


let firstValue = 10;
let secondvalue = 10;
let thirdValue = 10;
let fourthValue = 10;
let colorValue = "#000000";

//function
let applyEffect = ()=>{
    box.style.boxShadow=parentValue.replace('box-shadow:', '')


}
let 
printvaluehorizon = ()=>{
    spandhorizon.innerHTML= inputHorizon.value +"px"
   parentValue=`box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `
    text.innerHTML=`
    box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value};<br>
    -moz-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}; <br>
    -webkit-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `

firstValue = inputHorizon.value;
applyEffect()

}


let 
printValueVertical = ()=>{
    spandvertcal.innerHTML= inputvertical.value +"px"
    parentValue=`box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}`
    text.innerHTML=`
    box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value};<br>
    -moz-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}; <br>
    -webkit-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `
    secondvalue = inputvertical.value;
    applyEffect()

}

let 
printValueBlur = ()=>{
    spanBlurRaduis.innerHTML= BlurRaduis.value +"px"
    parentValue=`box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}`
    text.innerHTML=`
    box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value};<br>
    -moz-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}; <br>
    -webkit-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `
    thirdValue = BlurRaduis.value;
    applyEffect()

}


let 
printValueSpreadRadius = ()=>{
    spanSpreadRadius.innerHTML= SpreadRadius.value +"px"

    parentValue = `box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}`
    text.innerHTML=`
    box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value};<br>
    -moz-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}; <br>
    -webkit-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `
    fourthValue = SpreadRadius.value;

    applyEffect()


}
let 
printColor = ()=>{
    colorSpan.innerHTML= color.value 
    parentValue=`box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}`
    text.innerHTML=`
    box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} ;<br>
    -moz-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}; <br>
    -webkit-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `
    colorValue = color.value;
    applyEffect()

}



inputHorizon.value=10;
inputvertical.value =10;
spanBlurRaduis.value = 10;
BlurRaduis.value =10;
SpreadRadius.value=10;

spandhorizon.innerHTML= inputHorizon.value +"px"
spandvertcal.innerHTML= inputvertical.value +"px"
spanBlurRaduis.innerHTML= BlurRaduis.value +"px"
spanSpreadRadius.innerHTML= SpreadRadius.value +"px"
colorSpan.innerHTML= color.value 
text.innerHTML=`
box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value};
<br>
-moz-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value}; 
<br>
-webkit-box-shadow: ${firstValue}px ${secondvalue}px ${thirdValue}px ${fourthValue}px ${color.value} `

//callers
inputHorizon.oninput= printvaluehorizon 
inputvertical.oninput= printValueVertical 
BlurRaduis.oninput = printValueBlur
SpreadRadius.oninput = printValueSpreadRadius
color.oninput = printColor


document.getElementById("copy").onclick=function copyToClipboard() {
    const elem = document.createElement('textarea');
    elem.value = text.innerText;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);


 }
 console.log(text)

}

    render(){

 
        return(
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
 <h4>Box Shadow Options</h4>
 <div className="box-container">
<div className="prop-container">
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h5>Horizontal Shadow Length</h5>
    <span id="spandhorizon"></span>
    </div>
    <input type="range" min="-100" max="100" id="input-horizon"/>

</div>

<div className="prop-container">
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h5>Vertical Shadow Length</h5>
    <span id="span-vertical"></span>
    </div>
    <input type="range" min="-100" max="100" id="input-vertical"/>

</div>


<div className="prop-container">
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h5>Blur Radius</h5>
    <span id="span-BlurRaduis"></span>
    </div>
    <input type="range" min="0" max="100" id="input-BlurRaduis"/>

</div>


<div className="prop-container">
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h5>Spread Radius</h5>
    <span id="span-SpreadRadius"></span>
    </div>
    <input type="range" min="-100" max="100" id="input-SpreadRadius" />

</div>

<div className="prop-container">
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <h5>Shadow Color</h5>
    <span id="color-span">black</span>
    </div>
    <input type="color" id="color-input" />

</div>



 </div>

                </div>
                <div className="col-lg-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                 <div></div>   
     <div style={{background:"teal",width:"30em",height:"20em",margin:"3em"}} id="box">
     

     </div>
     
</div>
<div className="col-sm-12" style={{background:"#eee", textAlign:"center",borderRadius:"1em",lineHeight:"2em",fontSize:"1.5em",margin:"3em"}} id="code">
    </div>
    <p id="text" style={{background:"#eee", textAlign:"center",borderRadius:"1em",fontSize:"1.5em"}}>test</p>

<button id="copy" style={{background:"teal",color:"white",fontSize:"2em",padding:".2em",width:"5em",margin:"auto",marginBottom:"1em"}}>Copy</button>

                </div>   
            </div>
        )
    }
}
export default Home