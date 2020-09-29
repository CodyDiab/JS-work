

var first = 3/4;
var second = 5/7;


function addElement(results){
    var body = document.querySelector(".body")
    const newDiv = document.createElement("h1");
    const newContent = document.createTextNode(results)
    newDiv.appendChild(newContent);
    body.appendChild(newDiv);
    
    }
findLargestFrac=(a,b) =>{
    var result;
a>b?result= ["a:",a]:result=["b:",b];
 return addElement(result);
}

findLargestFrac(first,second)