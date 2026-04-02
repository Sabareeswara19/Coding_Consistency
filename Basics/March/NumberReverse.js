console.log("Reverse a number");

function numReverserLoop(num){
        let rev = 0;
        let n = Math.abs(num)
        if(n<10) return n;
        
        while (n>0){
            rev = rev*10 + (n%10);
            n = Math.floor(n/10); 
        }
        return num < 0 ? -rev : rev;
    
}

function StringReverse(num){
   let reversed = Math.abs(num).toString().split("").reverse().join("");
   return num < 0 ? -Number(reversed) : Number(reversed);
}

function numReverseRecursive(num, rev=0){
    if(num === 0) return rev;
    
    return numReverseRecursive(
        Math.floor(num/10),
        rev*10 + num%10
    )
}

function recursiveReverse(num){
    let reversed = numReverseRecursive(Math.abs(num));
    return num < 0 ? -reversed : reversed;
}

function reduceReverse(num){
    let reversed = Math.abs(num).toString().split("").reduce((rev,n) => n+rev,'')
    return num<0 ? -reversed : reversed;
}

function reverseWithSpread(num){
    return Number([...Math.abs(num).toString()].reverse().join(''))*Math.sign(num);
}

let input = [123, 456, -789];
let Output= [321, 654, -987];

function arrayNumberReverse(arr){
    return arr.map(numReverserLoop);
}


function numReverseWithOutModule(num){
    let rev = 0;
    let n = Math.abs(num);
    
    while(n > 0){
        let digit = n - Math.floor(n/10) * 10;
        rev = rev*10 + digit;
        n = Math.floor(n/10);
    }
    
    return num<0 ? -rev : rev;
}

// LeetCode Style Reverse Integer (With Overflow Handling)

function reverse(x) {
    let rev = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = (x / 10) | 0;   // faster floor

        rev = rev * 10 + digit;

        if (rev > 2147483647 || rev < -2147483648) {
            return 0;
        }
    }

    return rev;
}

// Reverse Only Part of Number

// Example:

// Input: 123456
// Reverse from position 2 to 4
// Output: 143256

function reversePart(num, start, end) {
    let arr = Math.abs(num).toString().split('');

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    let result = Number(arr.join(''));
    return num < 0 ? -result : result;
}

function Calling(num){
    console.log('numReverserLoop',numReverserLoop(num));
    console.log('StringReverse',StringReverse(num));
    console.log('recursiveReverse',recursiveReverse(num));
    console.log('reduceReverse',reduceReverse(num));
    console.log('reverseWithSpread',reverseWithSpread(num));
    console.log('arrayNumberReverse',arrayNumberReverse(input));
}

Calling(123);
