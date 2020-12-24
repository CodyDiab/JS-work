// getting percentage

function calculatePercentage(num,per){
    {return(num/100)*per;}
}
//

// sort and count alg

function birthdayCakeCandles(candles) {
    // Write your code here
    let num = candles.length;
    let values = candles.slice();
    let sortedValues = values.sort();
    let max = sortedValues[num-1]
    var count = 0;
    
    for(let i=0;i<sortedValues.length;i++){
        if(sortedValues[i]==max){
            count++
     }
    }
    return(count)

}
