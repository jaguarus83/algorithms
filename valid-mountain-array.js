const validMountainArray = (A) => {
  let isRock = true;
  const max = Math.max(...A);
  const index = A.indexOf(max);
  
  if (index === 0 || index === A.length - 1) return false;
  
  for (let i = 1; i <= index; i++) {
    if (A[i - 1] >= A[i]) isRock = false; 
  }
  
  for (let i = index; i < A.length - 1; i++) {
    if (A[i] <= A[i + 1]) isRock = false;
  }
  
  return isRock;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
