const isLongPressedName = (name, typed) => {
  if (typed.length <= name.length && name !== typed) return false;
  const tp = [...typed];

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== tp[i]) {
      let removed = null;
      do {
        removed = tp.splice(i, 1);
      } while (name[i] !== tp[i] && removed.length);
    }
  }

  return name === tp.join('').slice(0, name.length);
};

console.log(isLongPressedName('alex', 'aaleex'));
console.log(isLongPressedName('saeed', 'ssaaedd'));
console.log(isLongPressedName('leelee', 'lleeelee'));
console.log(isLongPressedName('laiden', 'laiden'));
console.log(isLongPressedName('vtkgn', 'vttkgnn'));
