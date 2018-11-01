var flipAndInvertImage = function(A) {
  return A.map((B) =>
    B.map((x, i) => {
      return B[B.length - 1 - i];
    }).map((x) => (x === 0 ? 1 : 0))
  );
};

console.log(
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]])
);
