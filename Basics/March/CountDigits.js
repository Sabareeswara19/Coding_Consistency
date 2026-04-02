console.log("Count num of digits in a number");

function noOfDigits(num){
    let count = 0;
    let n = Math.abs(num);
    if(n<10) return 1;
    
    while(n>0){
        count++;
       n = Math.floor(n/10); 
    }
    return count;
}

function numToString(num){
    return Math.abs(num).toString().length;
}

function numToAraayToString(num){
    return [...Math.abs(num).toString()].length;
    // will count decimal points also(.)
}

function countRecursive(num){
   let n = Math.abs(num);
    if(n<10 ) return 1;
    return 1+countRecursive(Math.floor(n/10));
}

function usingReduce(num){
    return Math.abs(num).toString().split("").reduce(count => count+1,0);
}

function countWithDecimal(num){
    return Math.abs(num).toString().replace(".","").length;
}

function spreadMethod(num){
    return [...Math.abs(num).toString().replace(".","")].length;
    // 1st abs(num) if -ve num to +ve num
    // 2nd toString() 123 -> "123"
    // replce(".","") -> removes decimal , so it can't be counted
    // ... spread will make string to character "1234" -> ['1','2','3','4']
    // lenght
}

function usingLogs(num){
    let n = Math.abs(num);
    if(n<10) return 1;
    return Math.floor(Math.log10(n)) + 1;
}

function Calling(num){
    console.log("whileLoop",noOfDigits(num));
    console.log("numToString",numToString(789463854563));
    console.log("numToAraayToString",numToAraayToString(num));
    console.log("countRecursive",countRecursive(189463854563));
    console.log("usingReduce",usingReduce(num));
    console.log("countWithDecimal",countWithDecimal(1894638545635646));
    console.log("spreadMethod",spreadMethod(1894638545635.646));
     console.log("usingLogs",usingLogs(num));
}

Calling(36);