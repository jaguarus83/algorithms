var hammingDistance = function(x, y) {
  let counter = 0;
  let [xBin, yBin] = [x, y].map((num) => num.toString(2));
  const length = Math.max(xBin.length, yBin.length);

  [xBin, yBin] = [xBin, yBin].map(normalizeBinary(length));

  for (let i = length - 1; i >= 0; i--) {
    if (xBin[i] !== yBin[i]) counter++;
  }

  return counter;
};

const normalizeBinary = (length) => (bin) => {
  const emptybinary = new Array(length).fill('0').join('');
  return emptybinary.slice(bin.length) + bin;
};

console.log('result: ', hammingDistance(1, 4));
