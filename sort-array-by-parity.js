var sortArrayByParity = function(A) {
  const odds = [];
  const evens = [];

  A.forEach((x) => {
    x % 2 === 0 ? odds.push(x) : evens.push(x);
  });

  return [...odds, ...evens];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
