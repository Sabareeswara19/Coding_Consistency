function pyramindForLoop(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += `*`;
    }

    console.log(row);
  }
}

function pyramindWithRepeat(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let star = "*".repeat(i * 2 - 1);
    console.log(spaces + star);
  }
}

function pyramidRecursion(n, i = 1) {
  if (i > n) return;

  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(i * 2 - 1);
  console.log(spaces + stars);

  pyramidRecursion(n, i + 1);
}

function pyramindWithSpace(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let star = "* ".repeat(i);
    console.log(spaces + star.trim());
  }
}

function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= i * 2 - 1; k++) {
      row += `${i}`;
    }

    console.log(row);
  }
}

function numberPyramindWithRepeat(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let star = `${i}`.repeat(i * 2 - 1);
    console.log(spaces + star);
  }
}

function increasingNumberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let nums = "";

    for (let j = 1; j <= 2 * i - 1; j++) {
      nums += j;
    }

    console.log(spaces + nums);
  }
}

function continousIncreasingNumberPyramid(n) {
  let num = 1;

  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(spaces + row);
  }
}

function Calling(n) {
  pyramindForLoop(n);
  pyramindWithRepeat(n);
  pyramidRecursion(n);
  numberPyramid(n);
  numberPyramindWithRepeat(n);
  pyramindWithSpace(n);
  increasingNumberPyramid(n);
  continousIncreasingNumberPyramid(n);
}

Calling(7);
