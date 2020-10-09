const MIN = 0;
const MAx = 36;
var testNumber = 15;
var i = 1;

while (MAX) {
    let randomValue = Math.floor(math.random() * (MAX - MIN)) + MIN;

    if (randomValue == testNumber) {
        break;
    }

    console.log("Round" + i + " : " + randomValue);
    i++;
}

/// is prime 

const CEILING = 100;

function primeTest(testValue) {

    let isPrime = true;
    for( let i = 2; i<testValue; i++) {
        if( testValue % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;

}

for ( let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    if(!result) {
        continue;
    }
    console.log(i + " is a prime number");
    
}
