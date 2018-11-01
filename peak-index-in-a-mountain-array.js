var peakIndexInMountainArray = function(A) {
  if (A.length < 3) return 0;
  let peak = 0;

  for (let i = 0; i < A.length; i++) {
    console.log(
      Number.isInteger(A[i - 1]),
      A[i - 1] < A[i],
      Number.isInteger(A[i + 1])
    );
    if (
      Number.isInteger(A[i - 1]) &&
      A[i - 1] < A[i] &&
      Number.isInteger(A[i + 1]) &&
      A[i] > A[i + 1]
    ) {
      peak = i;
    }
  }

  return peak;
};

var peakIndexInMountainArray = function(A) {
  let i = 0;

  while (A[i] < A[i + 1]) i++;

  return i;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
