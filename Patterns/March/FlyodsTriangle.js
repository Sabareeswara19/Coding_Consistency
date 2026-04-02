function leftFloydTriangleForloop(n){
    let num=1;
    for(let i=1;i<=n;i++){
        let row="";
        for(let j = 1;j<=i;j++){
            row+=num+' ';
            num++;
        }
        console.log(row);
    }
}

function leftFloydTriangleWhileLoop(n){
    let num=1;
    let i = 1;
    while(i<=n){
        let row = "";
        let j = 1;
        while(j<=i){
            row += num + " ";
            j++;
            num++;
        }
        console.log(row);
        i++;
        
    }
}

function leftFloydTriangleRecursive(n,i=1,num=1){
    if(i>n)return;

    let row="";
    for(let j=1;j<=i;j++){
        row+=num+" ";
        num++;
    }
    console.log(row);
    leftFloydTriangleRecursive(n,i+1,num);
}

function rightFloydTriangleRecursive(n,i=1,num=1){
    if(i>n)return;

    let row="";
    let spaces = "  ".repeat((n-i));

    for(let j=1;j<=i;j++){
        row += num.toString().padStart(2," ")+" "; 
        num++;
    }
    console.log(spaces+row);
    rightFloydTriangleRecursive(n,i+1,num);
}

function leftInvertedFlyodTriangleRecursive(n,i=n,num=1){
    if(i===0)return;
    let row = "";
    for(let j=1;j<=i;j++){
        row+=num+" ";
        num++;
    }
    console.log(row);
    leftInvertedFlyodTriangleRecursive(n,i-1,num);
}

function rightInvertedFlyodTriangleRecursive(n,i=n,num=1){
    if(i===0)return ;

    let spaces = "  ".repeat(n-i);
    let row="";
    for(let j=1;j<=i;j++){
    row+=num.toString().padStart(2," ")+" ";
        num++;
    }
    console.log(spaces+row);
    rightInvertedFlyodTriangleRecursive(n,i-1,num);
}

function horizontalLine(){
    console.log("------------------------------------------------------------------------------")
}

function Calling(n){
    horizontalLine();
    leftFloydTriangleForloop(n);
    horizontalLine();
    leftFloydTriangleWhileLoop(n);
    horizontalLine();
    leftFloydTriangleRecursive(n);
    horizontalLine();
    rightFloydTriangleRecursive(n);
    horizontalLine();
    leftInvertedFlyodTriangleRecursive(n);
    horizontalLine();
    rightInvertedFlyodTriangleRecursive(n);
}

Calling(5);