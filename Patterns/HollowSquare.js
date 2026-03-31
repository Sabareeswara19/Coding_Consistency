import { horizontalLine } from "../Commons/HorizontalLine.js";
let name = "Hollow Square";



function hollowSquareForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    if (i == 1 || i === n) {
      for (let j = 1; j <= n; j++) {
        row += "* ";
      }
    }else{
       for(let j=1;j<=n;j++){
        if(j===1 || j===n){
            row+= "* ";
        }
        else{
            row+='  '
        }
       }
    }

    console.log(row);
  }
}

function hollowSquareRecursive(n,i=1){
    if(i>n)return;

    let row = "";
    if(i===1 || i===n){
        row = "* ".repeat(n);
    }else{
        for(let j=1;j<=n;j++){
            if(j===1 || j===n){
                row+="* ";
            }else{
                row+="  "
            }
        }
    }
    console.log(row);
    hollowSquareRecursive(n,i+1);
}



function hollowSquareForLoopOptimized(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=n;j++){
            if(i===1 || i===n || j===1 || j===n){
                row+="* ";
            }
            else{
                row+= "  ";
            }
        }
        console.log(row);
    }
}

function hollowSquareRecursiveOptimized(n,i=1){
    if(i>n)return ;

    if(i===1 || i===n){
        console.log("* ".repeat(n));
    }else{
        console.log("* "+"  ".repeat(n-2)+"* ");
    }
    hollowSquareRecursiveOptimized(n,i+1);
}

function hollowSquareRepeatForLoop(n){
    for(let i=1;i<=n;i++){
        if(i===1 || i===n){
            console.log("* ".repeat(n));
        }else{
            console.log("* "+"  ".repeat(n-2)+"* ")
        }
    }
}

function Calling(n) {
  horizontalLine(name);
  hollowSquareForLoop(n);
  horizontalLine(name);
  hollowSquareRecursive(n);
  horizontalLine(name);
  hollowSquareForLoopOptimized(n);
  horizontalLine(name);
  hollowSquareRepeatForLoop(n);
  horizontalLine(name);
  hollowSquareRecursiveOptimized(n);


}

Calling(5);
