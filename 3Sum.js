var threeSum = function(nums) {
  const results = [];
  const strResults = [];
  const sorter = (a, b) => a - b;
  nums.sort(sorter);

  if (nums[0] === 0 && nums[1] === 0 && nums[2] === 0) return [[0, 0, 0]];
  if (nums[0] >= 0) return results;

  for (var i = 0; nums[i] <= 0; i++) {
    const a = nums[i];

    for (var j = i + 1; nums[j] <= -a; j++) {
      const b = nums[j];
      const c = -(a + b);

      const bIndex = nums.indexOf(b);
      const cIndex = nums.indexOf(c);
      if (
        nums.includes(b) &&
        nums.includes(c) &&
        cIndex !== i &&
        cIndex !== j
      ) {
        const sortedArr = [a, b, c].sort(sorter);

        if (!strResults.includes(sortedArr.toString())) {
          results.push(sortedArr);
          strResults.push(sortedArr.toString());
        }
      }
    }
  }

  return results;
};
