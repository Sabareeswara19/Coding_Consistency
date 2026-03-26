function horizontalLine() {
  console.log(
    "--------------------------------------------------------------------------------------------------------------",
  );
}

function leftNumberTraingleForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      // row += `${j} `;
      row += j;
    }
    console.log(row);
  }
}

function leftNumberTraingleArrayFill(n) {
  for (let i = 1; i <= n; i++) {
    let row = Array(i).fill(0).map((_, i) => i + 1);
    console.log(row.join(""));
  }
}

function leftNumberTraingleRecursive(n, i = 1) {
  if (i > n) return;

  // console.log(Array(i).fill(0).map((_,i) => i+1+" ").join(""));
  console.log(Array.from({ length: i }, (_, i) => i + 1).join(""));
  leftNumberTraingleRecursive(n, i + 1);
}


function rightNumberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let spaces = "";

    for (let j = 1; j <= n - i; j++) {
      spaces += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += k;
    }

    console.log(spaces + row);
  }
}

function rightNumberTriangleRecursive(n, i = 1) {
  if (i > n) return;

  let spaces = " ".repeat(n - i);
  let row = Array.from({ length: i }, (_, i) => i + 1).join("");
  console.log(spaces + row);
  rightNumberTriangleRecursive(n, i + 1);
}

function rightNumberTriangleUsingRepeat(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let row = Array(i)
      .fill(0)
      .map((_, i) => i + 1)
      .join("");
    console.log(spaces + row);
  }
}

function Calling(n) {
  console.log("Left Number Traingle");
  leftNumberTraingleForLoop(n);
  horizontalLine();
  leftNumberTraingleArrayFill(n);
  horizontalLine();
  leftNumberTraingleRecursive(n);
  horizontalLine();
  console.log("Right Number Traingle");
  rightNumberTriangle(n);
  horizontalLine();
  rightNumberTriangleRecursive(n);
  horizontalLine();
  rightNumberTriangleUsingRepeat(n);
}

Calling(5);
