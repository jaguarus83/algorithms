const largestTriangleArea = (points) => {
  const results = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        results.push(calculateSquare(points[i], points[j], points[k]));
      }
    }
  }

  return Math.max(...results);
};

const calculateSquare = (p1, p2, p3) => {
  return Math.abs(
    ((p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1])) / 2
  );
};

console.log(largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]]));
