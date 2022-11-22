var div =document.getElementById("div")
var div2 =document.getElementById("div2")
div.style.color="white"
div.style.backgroundColor="black"
var w =window.innerWidth
var w =window.innerWidth/2
var w= Math.trunc(w)
var c=div.clientWidth/2
var t =(((w-c)/w)*100)/2
div.style.marginLeft=t+"%"
window.addEventListener('resize', het)
function het(){
    if(window.innerWidth<=600){
        div.style.width="400px"
        div.style.height="600px"
    }
    else if(window.innerWidth<=650){
        div.style.width="500px"
    }
    else if(window.innerWidth<=750){
        div.style.width="600px"
    }
    else if(window.innerWidth<=850){
        div.style.width="600px"
    }
    else if(window.innerWidth>850){
        div.style.width="800px"
    }
    var w =window.innerWidth/2
    var w= Math.trunc(w)
    var c=div.clientWidth/2
    var t =(((w-c)/w)*100)/2
    div.style.marginLeft=t+"%"
    div.innerHTML=div.clientWidth
    div2.innerHTML=window.innerWidth
}