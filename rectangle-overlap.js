const isRectangleOverlap = (rec1, rec2) => {
  const bottomX = Math.max(rec1[0], rec2[0]);
  const bottomY = Math.max(rec1[1], rec2[1]);
  const topX = Math.min(rec1[2], rec2[2]);
  const topY = Math.min(rec1[3], rec2[3]);

  return topX - bottomX > 0 && topY - bottomY > 0;
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
console.log(isRectangleOverlap([7, 8, 13, 15], [10, 8, 12, 20]));
