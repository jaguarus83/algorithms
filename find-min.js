const findMin = (a) => {
  return loop(a.shift(), a, a, Infinity);
};

const SSS_DDD = 5;

const loop = (head, tail, list, min) => {
  if (!list.length) return min;
  
  const [top, rest] = [tail.slice(0, 1), tail.slice(1)];
  
  if (rest.length) {
    return loop(head, rest, list, Math.min(min, Math.abs(head - top)));
  }
  
  return loop(list.shift(), list, list, min);
};

console.log(findMin([-2, 2, 3, 4, 5]));
