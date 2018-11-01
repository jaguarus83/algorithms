const surfaceArea = (grid) => {
  let dx = 0;
  let dy = 0;
  let projZ = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] > 0) {
        projZ++;
      }

      if (j === 0) {
        dx += grid[i][j];
        dy += grid[j][i];
      }

      if (j === grid.length - 1) {
        dx += grid[i][j];
        dy += grid[j][i];
      }

      if (j > 0) {
        dx += Math.abs(grid[i][j - 1] - grid[i][j]);
        dy += Math.abs(grid[j - 1][i] - grid[j][i]);
      }
    }
  }

  return 2 * projZ + dx + dy;
};

console.log(surfaceArea([[2]])); // 10
console.log(surfaceArea([[1, 2], [3, 4]])); // 34
console.log(surfaceArea([[1, 0], [0, 2]])); // 16
console.log(surfaceArea([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); // 32
console.log(surfaceArea([[2, 2, 2], [2, 1, 2], [2, 2, 2]])); // 46
console.log(surfaceArea([[2, 2, 2], [2, 2, 2], [2, 2, 2]])); // 42
console.log(surfaceArea([[2, 2, 2], [2, 3, 2], [2, 2, 2]])); // 46
console.log(surfaceArea([[3, 3, 3], [3, 4, 5], [5, 0, 4]])); // 78
