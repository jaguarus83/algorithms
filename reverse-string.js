var reverseString = function(s) {
  let sum = '';
  for (let l of s) {
    sum = l.concat(sum);
  }

  return sum;
};

console.log(reverseString('Hello test'));
