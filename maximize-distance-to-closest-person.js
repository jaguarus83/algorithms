const maxDistToClosest = (seats) => {
  let counter = 0;
  const distances = [];
  let first = false;
  let last = false;
  if (seats[0] === 0) first = true;
  if (seats[seats.length - 1] === 0) last = true;
  debugger;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      counter++;
    } else {
      if (counter > 0) distances.push(counter);
      counter = 0;
    }
  }
  if (counter > 0) distances.push(counter);

  for (let i = 0; i < distances.length; i++) {
    if (i === 0 && first) continue;
    if (i === distances.length - 1 && last) continue;

    distances[i] = Math.ceil(distances[i] / 2);
  }

  return Math.max(...distances);
};

console.log(maxDistToClosest([0, 0, 1]));
console.log(maxDistToClosest([0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
