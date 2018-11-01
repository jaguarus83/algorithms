/* var projectionArea = function(grid) {
    let sumZ = 0;
    let sumX = 0;
    let sumY = 0;
    const sumYArr = grid[0];

    grid.forEach((items, i) => {
        sumZ += items.filter(x => x > 0).length;
        sumX += Math.max(...items);
        items.forEach((x, i) => {
            sumYArr[i] = Math.max(x, sumYArr[i]);
        })
    });

    sumY = sumYArr.reduce((acc, item) => acc + item, 0);

    return sumX + sumY + sumZ;
    
}; */

var projectionArea = function(grid) {
  const n = grid.length;
  let sum = 0;
  let bestCol = 0;
  let bestRow = 0;

  for (let i = 0; i < n; ++i) {
    bestCol = 0;
    bestRow = 0;

    for (let j = 0; j < n; ++j) {
      if (grid[i][j] > 0) sum++;

      bestRow = Math.max(bestRow, grid[i][j]);
      bestCol = Math.max(bestCol, grid[j][i]);
    }
    console.log(bestRow, bestCol);
    sum += bestCol + bestRow;
  }
  return sum;
};

// console.log(projectionArea([[2]]))
// console.log(projectionArea([[1,2],[3,4]]))
// console.log(projectionArea([[1,0],[0,2]]))
// console.log(projectionArea([[1,1,1],[1,0,1],[1,1,1]]))
// console.log(projectionArea([[2,2,2],[2,1,2],[2,2,2]]))
console.log(projectionArea([[1, 4], [1, 1]]));
