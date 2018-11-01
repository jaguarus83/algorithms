var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  if (bills[0] !== 5) return false;

  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five++;
        break;
      case 10:
        ten++, five--;
        break;
      case 20:
        if (ten > 0) ten--, five--;
        else five -= 3;
        break;
    }
    if (five < 0) return false;
  }
  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10]));
console.log(lemonadeChange([10, 10]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
