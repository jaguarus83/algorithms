var reverseOnlyLetters = function(S) {
  const arr = [...S].filter((s, i) => {
    return isLetter(s);
  });

  let results = [];

  for (let i = 0; i < S.length; i++) {
    if (isLetter(S[i])) {
      results.splice(i, 0, arr.pop());
    } else {
      results.push(S[i]);
    }
  }
  return results.join('');
};

const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

console.log(reverseOnlyLetters('ab-cd'));
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));
