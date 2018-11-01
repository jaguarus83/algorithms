const row1 = 'qwertyuiop';
const row2 = 'asdfghjkl';
const row3 = 'zxcvbnm';
var findWords = function(words) {
  return words.filter((word) => {
    word = word.toLowerCase();
    let row = 0;
    let prevRow = null;

    for (var i = 0; i < word.length; i++) {
      if (row1.includes(word[i])) {
        row = 1;
      }
      if (row2.includes(word[i])) {
        row = 2;
      }
      if (row3.includes(word[i])) {
        row = 3;
      }

      if (!prevRow) {
        prevRow = row;
      } else if (prevRow !== row) {
        return false;
      }
    }

    return true;
  });
};

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
