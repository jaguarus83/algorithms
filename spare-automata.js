const countChange = (money, coins) => {
  const results = [];
  
  if (money <= 0 || !coins.length) return results;
  
  return loop(money, coins, 0, results, [], null);
};

const loop = (money, coins, rest, results, result, last) => {
  const coinsLength = coins.indexOf(last) + 1 || coins.length;
  
  for (let i = 0; i < coinsLength; i++) {
    const sum = rest + coins[i];
    
    const currentResult = [...result];
    currentResult.push(coins[i]);

    if (sum === money) {
      results.push(currentResult);
    } else if (sum < money) {
      loop(money, coins, sum, results, currentResult, coins[i]);
    }
  }
  
  return results;
};

console.log(countChange(9, [1, 2, 3, 5]));
