var checkPossibility = function(nums) {
  let result = {};

  if (nums.length < 2 || isIncreasing(nums)) return true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > nums[i] || nums[i] > nums[i + 1]) {
      result[i] = nums[i];
    }
  }

  const keys = Object.keys(result);
  if (keys.length > 2) return false;

  for (let i = 0; i < keys.length; i++) {
    const numsCopy = [...nums];
    const index = Number(keys[i]);
    numsCopy[index] = index === 0 ? numsCopy[index + 1] : numsCopy[index - 1];
    if (isIncreasing(numsCopy)) return true;
  }

  return false;
};

const isIncreasing = (arr) =>
  arr.every((item, index) => (index === 0 ? true : arr[index - 1] <= item));

console.log(checkPossibility([1, 2, 4, 5, 3])); // true
console.log(checkPossibility([-1, 4, 2, 3])); // true
console.log(checkPossibility([3, 4, 2, 3])); // false
console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([2, 3, 3, 2, 4])); // true
