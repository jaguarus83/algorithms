var reverse = function(x) {
  if (!is32Bit(x)) return 0;
  let sign = Math.sign(x);
  const arr = [...Math.abs(x).toString()];
  const reve = arr.map((_, i) => arr[arr.length - i - 1]).join('') * sign;
  return is32Bit(reve) ? reve : 0;
};

const is32Bit = (x) => {
  return x >= -(2 ** 31) && x <= 2 ** 31 - 1;
};

var reverse = function(x) {
  if (!is32Bit(x)) return 0;
  let rev = 0;
  while (x != 0) {
    const pop = x % 10;
    x = Math.trunc(x / 10);
    rev = rev * 10 + pop;
    if (!is32Bit(rev)) return 0;
  }
  return rev;
};

console.log(reverse(-123));
console.log(reverse(1534236469));
