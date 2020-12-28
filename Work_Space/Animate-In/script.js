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
    setTimeout(function(){
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
