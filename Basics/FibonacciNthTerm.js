console.log("Fibonacci (nth term)");
//  0, 1, 1, 2, 3, 5, 8, 13,

function nthFibonacciLoop (num) {
    let a = 0;
    let b = 1;
    
    if(num === 1) return a;
    if(num === 2 ) return b;
    
    for(let i = 2;i<num;i++){
        let next = a+b;
        a=b;
        b=next
    }
    return b;
}

function onlyTwoVariablesFibonacci(num){
	if(num===1)return 0;
	if(num===2) return 1;
	let prev=0;
	let current=1;
	
	for(let i =3; i<=num;i++){
		let next = prev+current;
		prev = current;
		current = next;
	}	
	
	return current;
}

function mathematicalFibonacciNthTerm(num){
    if(num<=0)return;
    if(num===1) return 0;
    if(num===2) return 1;
    
    return mathematicalFibonacciNthTerm(num-1) + mathematicalFibonacciNthTerm(num-2);
}

function fibonacciMemoization(n,memo={}){
    if(n in memo) return memo[n];
    
    if(n===1) return 0;
    if(n===2) return 1;
    
    memo[n] = fibonacciMemoization(n-1,memo)+ fibonacciMemoization(n-2,memo);
    return memo[n];
}

function dpFibonacci(n){
    let dp = [0,1];
    
    for(i=2;i<n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n-1];
}

function Calling(num){
    console.log('nthFibonacciLoop',nthFibonacciLoop(num));
    console.log('mathematicalFibonacciNthTerm',mathematicalFibonacciNthTerm(num));
    console.log('fibonacciMemoization',fibonacciMemoization(num));
    console.log('dpFibonacci',dpFibonacci(num));
	console.log('onlyTwoVariablesFibonacci',onlyTwoVariablesFibonacci(num));
}

Calling(8);