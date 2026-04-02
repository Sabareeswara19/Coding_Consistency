function horizontalLine() {
  console.log(
    "------------------------------------------------------------------------------",
  );
}

function pascalTraingleForLoop(n) {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    triangle[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  return triangle;
}

function getValue(i, j) {
  if (j === 0 || j === i) return 1;
  return getValue(i - 1, j - 1) + getValue(i - 1, j);
}

function pascalTriangleRecursive(n) {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      row.push(getValue(i, j));
    }
    triangle.push(row);
  }
  return triangle;
}

function pascalReduce(n) {
  return Array.from({ length: n }).reduce((triangle, _, i) => {
    const row = [1];

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    if (i > 0) row.push(1);
    triangle.push(row);

    return triangle;
  }, []);
}

function Calling(n) {
  console.log(pascalTraingleForLoop(n));
  horizontalLine();
  console.log(pascalTriangleRecursive(n));
  horizontalLine();
  console.log(pascalReduce(n));

}

Calling(6);
