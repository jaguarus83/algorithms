var transpose = function(A) {
  const cols = A[0].length;
  const rows = A.length;
  const newMatrix = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!newMatrix[j]) newMatrix[j] = [];
      newMatrix[j][i] = A[i][j];
    }
  }
  return newMatrix;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
console.log(transpose([[5], [8]]));
