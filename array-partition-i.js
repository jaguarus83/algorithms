var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);

  return nums.reduce((acc, x, i) => {
    return acc + (i % 2 === 0 ? x : 0);
  }, 0);
  
  const a = `sdfsd ${sdf}`;
};

const a = {
  b: 10,
  c: 90
};

console.log(arrayPairSum([1, 4, 3, 2]));
