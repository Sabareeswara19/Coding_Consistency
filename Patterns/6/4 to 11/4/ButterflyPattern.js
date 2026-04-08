import { horizontalLine } from "../../../../Commons/HorizontalLine.js";
let name = "ButterflyPattern";

function butterflyForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }

    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }

  for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

function butterflyUsingRepeat(n) {
  for (let i = 1; i <= 2 * n; i++) {
    let stars = i <= n ? i : 2 * n - i + 1;

    let left = "*".repeat(stars);
    let space = "  ".repeat(n - stars);
    let right = "*".repeat(stars);

    console.log(left + space + right);
  }
}

function butterflyRecursive(n, i=1) {
  if (i > 2 * n) return;

  let stars = i <= n ? i : 2 * n - i + 1;

  let row =
    "*".repeat(stars) + "  ".repeat(n - stars) + "*".repeat(stars);

 console.log(row);

 butterflyRecursive(n,i+1);
}

function Callling(n) {
  horizontalLine(name);
  butterflyForLoop(n);
  horizontalLine(name);
  butterflyUsingRepeat(n);
  horizontalLine(name);
  butterflyRecursive(n);
  horizontalLine(name);
  horizontalLine(name);
}

Callling(5);
