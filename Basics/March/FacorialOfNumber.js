console.log("Find factorial");

function factorialLoop(num){
    let f = 1;
    for(let i=2;i<=num;i++){
        f *= i;
    }
    return f;
}


function factorialRecursive(num){
    if(num <=1) return 1;
    return num * factorialRecursive(num-1);
}


function factorailObjectIterative(num){
    let objIterator = [...Array(num).keys()].map((i)=> i+1).reduce((fact,num) => fact*num,1);
    let arrayFrom = Array.from({length:num},(_,i) => i+1).reduce((fact,num) => fact*num,1);
    let arrayFill = Array(num).fill(0).map((_,i) => i+1).reduce((fact,num) => fact*num,1);
    return {"arrayFrom":arrayFrom, "objIterator":objIterator,"arrayFill":arrayFill};
}


function rediceDirectly(num){
    return [...Array(num)].reduce((fact,_,i) => fact*(i+1),1); 
}

function mathmaticalRecurrence(num){
    return num === 0 ? 1 : num * mathmaticalRecurrence(num-1);
}

function bigInt_ForLargeNumbers(n){
    let fact = 1n;
    for(let i = 2n;i<=BigInt(n);i++){
        fact *= i;
    }
    return fact;
}

function factorailTail(num,acc=1){
    if(num<=1) return acc;
    return factorailTail(num-1,num*acc);
}
// a generator function (function*) returns an iterator object, and more specifically:
function* functionGenerator(num){
    let fact = 1;
    for(let i=2;i<=num;i++){
        fact*=i;
        yield fact;
        //yield means stop, remember where stopped, return, and restart from next iteration
    }
}

const memo = {};
function factorialMemo(num){
    if(num ===1) return 1;
    if(memo[num]) return memo[num]; // 
    console.log(`checking if memo was calling or not---${num}`);
	memo[num] = num * factorialMemo(num - 1);
	return memo[num];
	}
    // here what was happening is, every factorial value will be save in memo object,
    //later if user asked factorial of already existed one in memo obj, it will simply
    //return the value and  don't do recursive calling to find factorial




function Calling(num){
    console.log('factorialLoop',factorialLoop(num))
    console.log('factorialRecursive',factorialRecursive(num));
    console.log('factorailObjectIterative',factorailObjectIterative(num));
    console.log('rediceDirectly',rediceDirectly(num));
    console.log('mathmaticalRecurrence',mathmaticalRecurrence(num));
    console.log('bigInt_ForLargeNumbers',bigInt_ForLargeNumbers(num));
    console.log('factorailTail',factorailTail(num));
    console.log('functionGenerator',[...functionGenerator(num)]);
    console.log('functionGenerator',[...functionGenerator(num)].pop());
    console.log('factorialMemo',factorialMemo(num));
    console.log('memo',memo);
}


Calling(7);