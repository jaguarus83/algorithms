const diStringMatch = (S) => {
  // const nums = Array.apply(null, { length: S.length + 1 }).map(
//     Number.call,
//     Number
//   );
  
  const nums = [];
  for (let i = 0; i <= S.length; i++) {
    nums.push(i);
  }
  
  const results = [];
  
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'I') results.push(nums.shift());
    if (S[i] === 'D') results.push(nums.pop());
  }
  return results.concat(nums);
};
console.log(diStringMatch('IDID'));
console.log(diStringMatch('III'));
console.log(diStringMatch('DDI'));
