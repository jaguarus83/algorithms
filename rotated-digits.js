const rotatedDigits = (N) => {
  let count = 0;
  if (N < 1 || N > 10000) return 0;

  for (let i = 0; i <= N; i++) {
    const s = i.toString();
    let newS = '';
    for (let j = 0; j < s.length; j++) {
      switch (s[j]) {
        case '0':
        case '1':
        case '8':
          newS += s[j];
          break;
        case '6': 
          newS += '9';
          break;
        case '9':
          newS += '6';
          break;
        case '5':
          newS += '2';
          break;
        case '2':
          newS += '5';
          break;
        default:
          newS += '!';
      }
    }
    if (!isNaN(newS*1) && s !== newS) count++;
  }
  
  return count;
};

console.log(rotatedDigits(10));
