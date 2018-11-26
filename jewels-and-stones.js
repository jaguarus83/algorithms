var numJewelsInStones = function(J, S) {
  const regex = new RegExp(J.split('').join('|'), 'g');
  const matches = S.match(regex);
  return matches ? matches.length : 0;
};
console.log(numJewelsInStones('aA', 'aAAbbbb'));