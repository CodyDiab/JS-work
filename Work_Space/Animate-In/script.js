// function script(){
//     setTimeout(function(){
//         document.getElementById('animate').style.top = '0px';
//     }, 2000);
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function timeOut() {
    setTimeout(function(){ //Time out modal after 1 second/////
       modal.style.display = "none"
    },1000);
}
btn.onclick = function() {
   modal.style.display = "block";
   timeOut()
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var logo = document.getElementById("logo")

document.querySelector("#logo").addEventListener("mouseover", function (event){ event.preventDefault; expand(logo)});
document.querySelector("#logo").addEventListener("mouseout", function (event){ event.preventDefault; revert(logo)});

console.log(logo.style.width)
function expand(node){
   
    console.log("hover on")
   node.style.width="64px";
    node.style.height="64px";
}
function revert(node){
    console.log("hover off")
   node.style.width="32px";
    node.style.height="32px";
}
// document.getElementById("logo").addEventListener("mouseover", mouseOver);
// document.getElementById("logo").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("logo").style.color = "red";
// }

// function mouseOut() {
//   document.getElementById("logo").style.color = "black";
// }

///fade in script 
var opacity = 0; 
var intervalID = 0; 
window.onload = fadeIn; 

function fadeIn() { 
    setInterval(show, 200); 
} 

function show() { 
    var body = document.getElementById("body"); 
    opacity = Number(window.getComputedStyle(body) 
                     .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
} 