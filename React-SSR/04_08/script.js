function logScope() {
 let localVar = 2;
    if(localVar) {
        let localVar = "i'm different";
        console.log("nested localVar", localVar)
    }
    console.log(localVar)
}

logScope()