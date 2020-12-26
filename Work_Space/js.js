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

function designerPdfViewer(h, word) {
  
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let letterHeight = [];
    
    //push the hight value for each elemnt of word by comparing the letter to its index in letters
    for (let i = 0; i < word.length; i++){
      letterHeight.push(h[letters.indexOf(word[i])]);
    }
    
    //sort letterHeight array and get lest index (hieghest value)
    let tallest = letterHeight.sort()[letterHeight.length-1];
    
    return tallest * word.length;
    
  }