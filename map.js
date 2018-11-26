Array.prototype.map = function (f) {
  const results = [];
  this.forEach((item) => results.push(f(item)));

  return results;
};

const testMap = [1, 2, 5].map((item) => item * 2);
console.log(testMap);
