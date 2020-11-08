const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const one = document.getElementById("display1");
const two = document.getElementById("display2");
const three = document.getElementById("display3");

const toggleDisplay1 = () => {
    
  console.log("button 1 clicked")
  btn1.setAttribute("style","background-color:green")
  btn2.setAttribute("style","background-color:cadetblue")
  btn3.setAttribute("style","background-color:cadetblue")
  one.setAttribute("style","display:block")
  two.setAttribute("style","display:none")
  three.setAttribute("style","display:none")

}

const toggleDisplay2 = () => {
    console.log("button 2 clicked")
    btn2.setAttribute("style","background-color:green")
    btn1.setAttribute("style","background-color:cadetblue")
    btn3.setAttribute("style","background-color:cadetblue")
    two.setAttribute("style","display:block")
    one.setAttribute("style","display:none")
    three.setAttribute("style","display:none")

}

const toggleDisplay3 = () => {
    console.log("button 3 clicked")
    btn3.setAttribute("style","background-color:green")
    btn1.setAttribute("style","background-color:cadetblue")
    btn2.setAttribute("style","background-color:cadetblue")
    three.setAttribute("style","display:block")
    two.setAttribute("style","display:none")
    one.setAttribute("style","display:none")

}


btn1.onclick = function(){toggleDisplay1()};
btn2.onclick = function() {toggleDisplay2()};
btn3.onclick = function() {toggleDisplay3()};