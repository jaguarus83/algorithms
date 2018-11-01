const reverse = (arr) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    arr.splice(i, 0, arr.pop());
  }

  return arr;
};

console.log(reverse([5, 4, 3, 2, 1]));
