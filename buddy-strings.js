var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false;
  if (A === B) {
    const setA = new Set([...A]);
    return A.length === setA.size ? false : true;
  }

  const ix = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) ix.push(i);
  }

  if (ix.length > 2) return false;
  return A[ix[0]] === B[ix[1]] && A[ix[1]] === B[ix[0]];
};

console.log(buddyStrings('aa', 'aa'));
console.log(buddyStrings('ab', 'ba'));
console.log(buddyStrings('ab', 'ab'));
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));
console.log(buddyStrings('', 'aa'));
