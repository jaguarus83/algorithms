var smallestRangeI = function(A, K) {
  if (A.length < 2) return 0;

  A.sort((a, b) => a - b);

  const mid = (A[A.length - 1] - A[0]) / 2;

  if (K > mid) return 0;

  return A[A.length - 1] - 2 * K - A[0];
};

var smallestRangeI = function(A, K) {
  const max = Math.max(...A);
  const min = Math.min(...A);

  return Math.max(0, max - min - 2 * K);
};

console.log(smallestRangeI([1], 0));
console.log(smallestRangeI([0, 10], 2));
console.log(smallestRangeI([1, 3, 6], 3));
console.log(smallestRangeI([2, 7, 2], 1));
