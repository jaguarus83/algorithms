const mostCommonWord = (paragraph, banned) => {
  const words = paragraph.split(/\W/);
  const obj = words.reduce((acc, word) => {
    word = word.toLowerCase();
    if (banned.includes(word) || !word) return acc;

    if (acc[word]) {
      acc[word]++;
    } else {
      acc[word] = 1;
    }

    return acc;
  }, {});
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
};

console.log(mostCommonWord('a, a, a, a, b,b,b,c, c', ['a']));
console.log(mostCommonWord('Bob!', ['hit']));
console.log(
  mostCommonWord(
    'Bob! hit ? a ball, the; hit BALL flew. far after it was hit.',
    ['hit']
  )
);
