function diamondPatternForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i * 2 - 1; k++) {
      row += "*";
    }

    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i * 2 - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}
function diamondPatternUsingRepeat(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }

  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

function printRow(n,i){
    console.log(" ".repeat(n-i)+"*".repeat((2*i-1)));
}

function diamondPatternRecursive(n,i=1){
    if(i>n) return ;
    printRow(n,i);
    diamondPatternRecursive(n,i+1);

    if(i<n){
        printRow(n,i);
    }
}

function horizontalLine() {
  console.log("----------------------------------------------------");
}

function Calling(n) {
  diamondPatternForLoop(n);
  horizontalLine();
  diamondPatternUsingRepeat(n);
  horizontalLine();
  diamondPatternRecursive(n);
}
Calling(6);
