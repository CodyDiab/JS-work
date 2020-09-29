// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	function multiply() {
// 		var result = a*b;
// 		return result;
// 	}
// 	return multiply;
// }

// var theResult = doSomeMath();

// console.log("The result: ", theResult);

//convert px to ems 
function giveMeEms(pixels) {
	//base font size
	var baseValue = 16;

	function doTheMath() {
		return pixels/baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var medSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);

