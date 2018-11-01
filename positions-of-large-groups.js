const largeGroupPositions = (S) => {
  const results = [];
  let start = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] !== S[i + 1]) {
      if (i - start >= 2) {
        results.push([start, i]);
      }
      start = i + 1;
    }
  }

  return results;
};

console.log(largeGroupPositions('abbxxxxzzy'));
console.log(largeGroupPositions('abc'));
console.log(largeGroupPositions('abcdddeeeeaabbbcd'));
console.log(largeGroupPositions('aaa'));
