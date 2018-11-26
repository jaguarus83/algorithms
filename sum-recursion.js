// const sum = f => (x, y) => {
//   let s = 0;
//   while (x <= y) {
//     s += f(x);
//     x++;
//   }
//   return s;
// }

// const sum = f => (x, y) => {
//   return (x > y) ? 0 : f(x) + sum(f)(x + 1, y);
// }



const getSum = f => (x, y) => {
  const sum = (i, acc) => {
    return (i > y) ? acc : sum(i + 1, f(i) + acc);
  }
  
  return sum(x, 0);
}

console.log(getSum(x => x * x)(1, 5000));
