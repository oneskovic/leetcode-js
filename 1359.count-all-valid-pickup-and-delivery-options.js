/**
 * @param {number} n
 * @return {number}
 */
const countOrders = function(n) {
  let res = 1
  const MOD = 10 ** 9 + 7
  for(let i = 1; i <= n; i++) {
    res = res * (i * 2 - 1) * i % MOD;
  }
  return res
};

