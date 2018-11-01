var judgeCircle = function(moves) {
  let [x, y] = [0, 0];
  const mover = new Mover([x, y]);

  for (direction of moves) {
    [x, y] = mover.move(direction);
  }

  return x === 0 && y === 0;
};

class Mover {
  constructor(origin) {
    [this.x, this.y] = origin;
  }

  move(direction) {
    switch (direction) {
      case 'U':
        this.y++;
        break;
      case 'D':
        this.y--;
        break;
      case 'L':
        this.x--;
        break;
      case 'R':
        this.x++;
    }

    return [this.x, this.y];
  }
}

console.log(judgeCircle('UDLLLRRR'));
