const fairCandySwap = (A, B) => {
  const sumA = sum(A);
  const sumB = sum(B);
  const setB = new Set(B);

  let i = 0;
  let diff = (sumB - sumA) / 2;

  while (i < A.length) {
    const minVal = A[i];
    if (setB.has(minVal + diff)) return [minVal, minVal + diff];
    i++;
  }
  return [];
};

// const sum = (arr) => {
//     return arr.reduce((a, b) => a + b);
// };

const sum = (arr) => {
  let s = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    s += arr[i];
  }

  return s;
};

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([5], [2, 7]));
console.log(fairCandySwap([1, 2, 5], [2, 4]));
