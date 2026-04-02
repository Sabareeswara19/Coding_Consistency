import { horizontalLine } from "../../Commons/HorizontalLine.js";
let name = "Alphabet Triangle";

function alphabetTriangleForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

function continousAlphaTriangle(n) {
  let char = 65;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(char++);
    }
    console.log(row);
  }
}

function alphaRightTraingleRecursive(n, i = 1) {
  if (i > n) return;

  let row = "";
  row = " ".repeat(n - i);
  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j);
  }
  console.log(row);
  alphaRightTraingleRecursive(n, i + 1);
}

function alphaPyramidRecursive(n, i = 1) {
  if (i > n) return;

  let row = "";

  row = " ".repeat(n - i);

  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j);
  }

  for (let j = i - 2; j >= 0; j--) {
    row += String.fromCharCode(65 + j);
  }
  console.log(row);
  alphaPyramidRecursive(n, i + 1);
}

function continousAlphaPyramidRecursive(n) {
  let char = 65;

  function helper(row) {
    if (row > n) return;

    let line = "";
    // line = " ".repeat(n - row);
    for(let s = 1;s<=(n-row);s++){
        line+= " ";
    }

    for (let j = 1; j <= row; j++) {
      line += String.fromCharCode(char++) + " ";
    }
    console.log(line.trimEnd());

    helper(row + 1);
  }
  helper(1);
}




function Calling(n) {
  horizontalLine(name);
  alphabetTriangleForLoop(n);
  horizontalLine(name);
  continousAlphaTriangle(n);
  horizontalLine(name);
  alphaRightTraingleRecursive(n);
  horizontalLine(name);
  alphaPyramidRecursive(n);
  horizontalLine(name);
  continousAlphaPyramidRecursive(n);
}

Calling(5);
