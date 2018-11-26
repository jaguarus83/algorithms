const letterCasePermutation = (S) => {
  let results = [''];

  for (let i = 0; i < S.length; i++) {
    const l = results.length;
    
    if (isNaN(S[i])) {
      for (let j = 0; j < l; j++) {
        results.push(results[j] + S[i].toUpperCase());
        results[j] = results[j] + S[i].toLowerCase();
      }
    } else {
      for (let j = 0; j < l; j++) {
        results[j] = results[j] + S[i];
      }
    }
  }

  return results;
};
console.log(letterCasePermutation('a1b2'));
console.log(letterCasePermutation('3z4'));
console.log(letterCasePermutation('12345'));
