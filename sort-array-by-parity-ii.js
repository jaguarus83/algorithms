const sortArrayByParityII = (A) => {
  let even = 0;
  let odd = 1;
  results = [];

  while (A.length) {
    const item = A.shift();
    if (item % 2 === 0) {
      results[even] = item;
      even += 2;
    } else {
      results[odd] = item;
      odd += 2;
    }
  }

  return results;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
