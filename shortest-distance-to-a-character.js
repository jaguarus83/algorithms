var shortestToChar = function(S, C) {
  const indexes = [];
  const distances = [];
  const length = S.length;

  for (let i = 0; i < length; i++) {
    if (S[i] === C) indexes.push(i);
  }

  for (let i = 0; i < length; i++) {
    distances.push(
      indexes.reduce((min, index) => {
        return Math.min(min, Math.abs(index - i));
      }, length)
    );
  }

  return distances;
};

console.log(shortestToChar('loveleetcode', 'e'));
