const backspaceCompare = (S, T) => {
  const l = Math.max(S.length, T.length);
  let s = [];
  let t = [];

  for (let i = 0; i < l; i++) {
    S[i] && (S[i] === '#' ? s.pop() : s.push(S[i]));
    T[i] && (T[i] === '#' ? t.pop() : t.push(T[i]));
  }

  return s.join('') === t.join('');
};

console.log(backspaceCompare('avb#sd#', ''));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
