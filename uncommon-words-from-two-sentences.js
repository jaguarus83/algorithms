const uncommonFromSentences = (A, B) => {
  const list = [...A.split(' '), ...B.split(' ')];
  const uniqueList = [];
  const nonUniqueList = [];

  while (list.length) {
    const item = list.pop();

    if (!list.includes(item) && !nonUniqueList.includes(item)) {
      uniqueList.push(item);
    } else {
      nonUniqueList.push(item);
    }
  }

  return uniqueList;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
