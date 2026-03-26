// Sum of first N natural numbers

function recursiveSumOfNum(n){
	if(n===0) return 0;
	return n+ recursiveSumOfNum(n-1);
}

function formulaBases(n){
	return (n*(n+1))/2;
}

function sumOfNumbers(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log("Keys iterator",[...Array(10).keys()].map((i) => i+1).reduce((sum,num) => sum+num,0));
console.log("fill",Array(10).fill(0).map((_,i) => i+1).reduce((sum,num) => sum+num,0));
console.log("from method",Array.from({length:7},(_,i) => i+1).reduce((sum,num) => sum+num,0));

function Calling(num){
    console.log('recursiveSumOfNum',recursiveSumOfNum(num));
    console.log('formulaBases',formulaBases(num));
    console.log('sumOfNumbers',sumOfNumbers(num));
}

Calling(10);

console.log(Array(5).fill(0).map((_,i) => i+1));
console.log(Array.from({length:10},(_,i) => i+1));