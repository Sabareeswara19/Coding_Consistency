//Find the maximum of two numbers

// Ternary approach
function findMaxTernary(x,y){
	return x>y ? x : y;
}

console.log(findMaxTernary(10,12));

// conditional branching
function findMaxIfStatements(x,y){
	if(x>y) return x;
	else return y;
}
console.log(findMaxIfStatements(10,12));



// Built in Approach
console.log("Math.max Approach:",Math.max(21,19));

// Array+spread
const max = Math.max(...[20,30]);
console.log("Array + Spread Appraoch:",max);


// Sorting Method
function findMaxValueSortingApproach (...arr){
    return arr.sort((a,b) => b-a)[0];
}
console.log("sorting Approach:",findMaxValueSortingApproach(23,11,12,95,23));

// Reduce Method
function fineMaxUsingReduce(x,y){
    return [x,y].reduce((max,val) => val>max ? val : max);
}
console.log("reduce",fineMaxUsingReduce(26,-1));

// Bitwise Maximum Algorithm
function findMaxBit(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}
console.log("bitwise approach",findMaxBit(0,-1));

// Find the maximum of three numbers
function findMaxInThree(x,y,z){
	return (x>=y && x>=z) ? x : (y>=x && y>=z) ? y : z;
}
console.log(findMaxInThree(10,14,23));

