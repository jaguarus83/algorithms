const rotateString = (A, B) => {
  if (A === B) return true;
  for (let i = 0; i < A.length; i++) {
    A = A.slice(1) + A.slice(0, 1);
    if (A === B) return true;
  }
  
  return false;
}

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));