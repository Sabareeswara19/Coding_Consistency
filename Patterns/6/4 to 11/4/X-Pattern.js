import { horizontalLine } from "../../../../Commons/HorizontalLine.js";

let name = "X - Pattern";

function xPatternForLoop(n) {
  for(let i=0;i<n;i++){
    let row= "";

    for(let j=0;j<n;j++){
        if(i===j || i+j === n-1){
            row+="* ";
        }else{
            row+="  ";
        }
    }
    console.log(row);
  }
}

function xPatternUsingTernary(n){
    for(let i=0;i<n;i++){
        let row= "";
        for(let j=0;j<n;j++){
            row+= (i===j || i+j === n-1) ? "* " : "  ";
        }
        console.log(row);
    }
}

function xPatternArrayFill(n){
    for(let i=0;i<n;i++){
        let row = Array(n).fill("  ");

        row[i] = "* ";
        row[n-i-1] = "* "
        console.log(row);
    }
}

function xPatternRecursive(n,i=0){
    if(n===i) return;

    let row = '';
    for(let j=0;j<n;j++){
        if(i===j || i+j === n-1){
            row+= "* ";
        }
        else{
            row+= "  ";
        }
    }
    console.log(row);
    xPatternRecursive(n,i+1);
}

function xPatternContinousAlphabit(n){
    let char = 65;

    for(let i=0;i<n;i++){
        let row= "";
        for(let j=0;j<n;j++){
            if(i===j || i+j === n-1){
                row+= String.fromCharCode(char)+" ";
                char++;
            }else{
                row+= "  ";
            }
        }
        console.log(row);
    }
}

function xPatternContinousNumber(n){
    let num = 1;
    for(let i=0;i<n;i++){
        let row= "";
        for(let j=0;j<n;j++){
           if(i===j || i+j === n-1){
            row+= num+" ";
            num++;
           } else{
            row+= "  ";
           }
        }
        console.log(row);
   
   
    }
}

function Calling(n){
    horizontalLine(name);
    xPatternForLoop(n);
    horizontalLine(name);
    xPatternUsingTernary(n);
    horizontalLine(name);
    xPatternArrayFill(n);
    horizontalLine(name);
    xPatternRecursive(n);
    horizontalLine(name);
    xPatternContinousAlphabit(n);
    horizontalLine(name);
    xPatternContinousNumber(n);
    horizontalLine(name);
}



Calling(5);


