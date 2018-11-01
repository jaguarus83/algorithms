var findComplement = function(num) {
  return parseInt(
    [...num.toString(2)].map((i) => (i === '0' ? '1' : '0')).join(''),
    2
  );
};

console.log(findComplement(5));
console.log(findComplement(2));
console.log(findComplement(4));
