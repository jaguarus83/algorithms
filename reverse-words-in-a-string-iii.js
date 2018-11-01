var reverseWords = function(s) {
  return s
    .split(' ')
    .map((word) => {
      return reverseWord(word);
    })
    .join(' ');
};

var reverseWords = function(s) {
  let result = '';
  let part = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += part + s[i];
      part = '';
    } else {
      part = s[i].concat(part);
    }
  }
  result += part;

  return result;
};

/* const reverseWord = (word) => {
    const arr = word.split('');
    for(let i = 0; i < arr.length; i++) {
        arr.splice(i, 0, arr.pop());
    }

    return arr.join('');
}; */

const reverseWord = (word) => {
  const arr = [...word];
  return arr
    .map((_, i) => {
      return arr[arr.length - 1 - i];
    })
    .join('');
};

console.log(reverseWords("Let's take LeetCode contest"));
