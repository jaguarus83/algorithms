var selfDividingNumbers = function(left, right) {
  const numbers = [];

  while (left <= right) {
    if (!withZero(left) && selfDividing(left)) {
      numbers.push(left);
    }
    left++;
  }

  return numbers;
};

const withZero = (num) => {
  const str = num.toString();
  return str.includes('0');
};

const selfDividing = (num) => {
  const str = num.toString().split('');
  return str.reduce((acc, s) => {
    return acc ? num % s === 0 : false;
  }, true);
};

console.log(selfDividingNumbers(1, 22));
