const isValid = (s) => {
  const pairs = ['()', '[]', '{}'];
  while (pairs.some((pair) => s.indexOf(pair) > -1)) {
    pairs.forEach((pair) => {
      const pos = s.indexOf(pair);
      if (pos > -1) {
        s = s.slice(0, pos) + s.slice(pos + 2);
      }
    });
  }

  return !s;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('{[]}'));
console.log(isValid('([)]'));
