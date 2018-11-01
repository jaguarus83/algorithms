var hasGroupsSizeX = function(deck) {
  const length = deck.length;

  if (length <= 1) return false;

  let min = 2;
  const [group, values] = groupValues(deck);
  let i = Math.min(...values);

  if (i < min) return false;

  while (min <= i) {
    if (isDenominator(values, min)) return true;
    min++;
  }

  return false;
};

const groupValues = (arr) => {
  const values = [...arr];
  const group = {};

  while (values.length) {
    const el = values.shift();
    group[el] ? group[el]++ : (group[el] = 1);
  }

  return [group, Object.values(group)];
};

const isDenominator = (values, d) => {
  return values.every((v) => v % d === 0);
};

console.log(
  hasGroupsSizeX([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5
  ])
);
console.log(hasGroupsSizeX([0, 0, 0, 0, 0, 1, 1, 2, 3, 4]));
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1]));
console.log(hasGroupsSizeX([1, 1]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
