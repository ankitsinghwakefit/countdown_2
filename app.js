var result = document.querySelector("h1");
result.innerText = 0;

var incr = document.querySelector(".inc");
var decr = document.querySelector(".dec");
var resr = document.querySelector(".res");

function reset(){
    result.innerText = 0;
}

resr.addEventListener("mouseover",reset);


function decrement(){
    result.innerText = result.innerText-1;
}

decr.addEventListener("mouseover",decrement);


function increment(){
    result.innerText= Number(result.innerText)+1;
  }
  
  incr.addEventListener("mouseover",increment);