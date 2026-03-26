

console.log("Check Arm strong Number");
function countDigits(num) {
    return Math.abs(num).toString().length;
}

function findPowerRecursive(base,exp){

    if(exp===0) return 1;
    return base*(findPowerRecursive(base,exp-1));
}

function checkArmStrongOrNot(num){
    let count = countDigits(num);
    let n = Math.abs(num);
    
    let result = 0;
    while(n>0){
        let ld = Math.floor(n%10);
        let numPower= findPowerRecursive(ld,count);
        result += numPower;
        n = n/10;
    }

    
    return result === num ? 'ArmStrong Number' : "Not a Armstrong Number"
}

function armStrongBasic(num){
    let orgNum = num;
    let count = num.toString().length;
    let result = 0;
    
    while(num>0){
        let ld = Math.floor(num%10);
        result += ld**count;
        num=num/10;
    }
    
    return orgNum === result ? 'Arm Strong' : 'No'
}

function armStrongForLoop(num){
    let orgNum = num;
    let count = num.toString().length;
    let result = 0;
    
    for(;num>0;num=Math.floor(num/10)){
        let ld = Math.floor(num%10);
        result += ld**count;
        
    }
    
    return orgNum === result ? 'Arm Strong' : 'No'
}

function reduceArmStrong(num){
    let digits = num.toString().split("");
    let count = digits.length;
    
    let result =  digits.reduce((acc,n) => acc+Math.pow(Number(n),count),0);
    
     return num === result ? 'Arm Strong' : 'No';
}

function reduceMapArmStrong(num){
    let digits = [...num.toString()];
    let count = digits.length;
    
    let result = digits.map(n => Math.pow(Number(n),count)).reduce((acc,n) => acc+n,0);
     return num === result ? 'Arm Strong' : 'No';
}

const isArmStrong = num => 
[...num.toString()]
.reduce((acc,n) => acc+ n**String(num).length,0) === num;



function Calling(n){
    console.log('checkArmStrongOrNot-->',checkArmStrongOrNot(n));
    console.log('armStrongBasic-->',armStrongBasic(n));
    console.log('armStrongForLoop-->',armStrongForLoop(n));
    console.log('reduceArmStrong-->',reduceArmStrong(n));
    console.log('reduceMapArmStrong-->',reduceMapArmStrong(n));
    console.log('isArmStrong-->',isArmStrong(n));
}

Calling(15);