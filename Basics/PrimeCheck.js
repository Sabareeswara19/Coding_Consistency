function primeCheck(num){
    let count = 0;
    for(let i = 1; i <= num; i++){
        if(num % i === 0) count++;
    }
    return count === 2;
}

function isPrime(num){
    if(num <= 1) return false;
    let count = 0;

    for(let i = 1; i <= num; i++){
        if(num % i === 0) {
            count++;
            if(count > 2) return false;
        }
    }
    return count === 2;
}

function isPrime(num){
    if(num <= 1) return false;

    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}