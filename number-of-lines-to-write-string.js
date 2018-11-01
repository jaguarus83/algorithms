var numberOfLines = function(widths, S) {
  let sum = 0;
  let lines = 1;

  for (let s of S) {
    const width = widths[s.charCodeAt(0) - 97];

    if (sum + width > 100) {
      lines++;
      sum = 0;
    }

    sum += width;
  }
  return [lines, sum];
};

console.log(
  numberOfLines(
    [
      4,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10
    ],
    'bbbcccdddaaa'
  )
);
console.log(
  numberOfLines(
    [
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10
    ],
    'abcdefghijklmnopqrstuvwxyz'
  )
);
