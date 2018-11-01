var isMonotonic = function(A) {
  let isInc = true;
  let isDec = true;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) isInc = false;
    if (A[i - 1] < A[i]) isDec = false;
  }
  return isInc || isDec;
};

const isIncreasing = (arr) =>
  arr.every((item, index) => (index === 0 ? true : arr[index - 1] <= item));

const isDecreasing = (arr) =>
  arr.every((item, index) => (index === 0 ? true : arr[index - 1] >= item));

console.log(isMonotonic([1]));
console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 2, 4, 5]));
console.log(isMonotonic([1, 1, 1]));
