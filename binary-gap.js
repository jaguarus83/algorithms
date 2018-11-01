const binaryGap = (N) => {
  const bin = N.toString(2);
  let counter = 0;
  let maxQty = 0;

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1' && counter > 0) {
      maxQty = Math.max(maxQty, counter);
      counter = 1;
    } else counter++;
  }
  return maxQty;
};

console.log(binaryGap(13));
console.log(binaryGap(22));
console.log(binaryGap(5));
console.log(binaryGap(6));
console.log(binaryGap(8));
