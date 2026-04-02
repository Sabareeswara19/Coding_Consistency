import { horizontalLine } from "../../Commons/HorizontalLine.js";
let name = "Hollow Trignle";

function hollowTriangleForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

function howllowTriangleRecersive(n, i = 1) {
  if (i > n) return;

  let row = "";
  if (i === 1 || i === n) {
    console.log("* ".repeat(i));
  } else {
    console.log("* " + "  ".repeat(i - 2) + "* ");
  }
  howllowTriangleRecersive(n, i + 1);
}

function hollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    let spaces = " ".repeat(n - i);

    for (let j = 1; j <= ((i * 2) - 1); j++) {
      if (j === 1 || j === ((i * 2) - 1) || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(spaces + row);
  }
}

function Calling(n) {
  horizontalLine(name);
  hollowTriangleForLoop(n);
  horizontalLine(name);
  howllowTriangleRecersive(n);
  horizontalLine(name);
  hollowPyramid(n);
}

Calling(5);
