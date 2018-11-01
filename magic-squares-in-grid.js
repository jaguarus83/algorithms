const numMagicSquaresInside = (grid) => {
  if (grid.length < 3 || grid[0].length < 3) return 0;
  let counter = 0;
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[0].length - 2; j++) {
      if (isMagic(grid, i, j)) counter++;
    }
  }
  return counter;
};

const isMagic = (arr, i, j) => {
  let isAllNumbersPresent = true;

  const copy = [
    arr[i][j],
    arr[i][j + 1],
    arr[i][j + 2],
    arr[i + 1][j],
    arr[i + 1][j + 1],
    arr[i + 1][j + 2],
    arr[i + 2][j],
    arr[i + 2][j + 1],
    arr[i + 2][j + 2]
  ];

  for (let m = 1; m <= 9; m++) {
    if (!copy.includes(m)) {
      return (isAllNumbersPresent = false);
    }
  }

  const sum1 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
  const sum2 = arr[i][j] + arr[i + 1][j] + arr[i + 2][j];
  const sum3 = arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2];

  return isAllNumbersPresent && sum1 === sum2 && sum2 === sum3;
};

console.log(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]));
console.log(
  numMagicSquaresInside([
    [3, 10, 2, 3, 4],
    [4, 5, 6, 8, 1],
    [8, 8, 1, 6, 8],
    [1, 3, 5, 7, 1],
    [9, 4, 9, 2, 9]
  ])
);
console.log(
  numMagicSquaresInside([
    [2, 6, 7, 8],
    [10, 5, 0, 1],
    [3, 4, 8, 6],
    [2, 9, 4, 4]
  ])
);
