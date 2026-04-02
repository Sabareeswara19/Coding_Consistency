// Check if a number is even or odd

num = 12;

console.log("Using if statements");
if(num%2 === 0 ){
    console.log("Even")
}else{
    console.log("odd")
}

let result = (num%2 === 0 ) ? "Even" : "Odd";
console.log(result);

const checkEvenOdd = num => num%2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(13));

const checkOddEven = num => num%2 === 0;
console.log(checkOddEven(9990) ? "Even" : "Odd");


// binary approach
num = 17;
if((num & 1) === 0){
    console.log("Even")
}else{
    console.log("Odd")
}

console.log((num & 1) === 0 ? "even" : "Odd")