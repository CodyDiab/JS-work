//check if prime
function isPrime(n) 
{
    if(n===1)
    {
        return false;
    }
    else if(n===2)
    {return true;
    }else 
    {
        for(var x =2; x< n; x++)
        {
            if(n%x=== 0)
            {
                return false;
            }
            return true;
        }
    }
}

//XOR opperator 
// if a equals b XOR c equals d (not both)
if ((a == b || c == d) && ((a == b) != (c == d)))
{

}

// ARRAY METHODS////////////////////////////

var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
// console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
// pens.reverse();

// Remove the first value of the array:
// pens.shift();

// Add comma-separated list of values to the front of the array:
// pens.unshift("purple", "black");

// Remove the last value of the array:
// pens.pop();

// Add comma-separated list of values to the end of the array:
// pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.

// console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
// var newPens = pens.slice();
// console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = pens.indexOf(search, index);
// console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
// console.log("String from array: ", arrayString);

// join array with array.flat() takes levels as 

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

function funWithAnagrams(text) {
    // Write your code here
 let drop = [];
 
 for(let word of text) {
     for (let i = 0; i< text.length; i++) {
         if(word != text[i] && !drop.includes(word)) {
             if (comp(word,text[i])) {
                 drop.push(text[i])
             }
         }
     }
 }
  return text.filter(n=> !drop.includes(n)).sort();
}
function comp(word, wordToComp) {
    if(word.length != wordToComp.length) {
        return false;
    }
    const arrWord = word.split('').sort();
    const arrWordToComp = wordToComp.split('').sort();
    
    return arrWord.toString() === arrWordToComp.toString();
}