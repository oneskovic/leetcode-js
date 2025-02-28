/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
const closestCost = function(baseCosts, toppingCosts, target) {
  let res = baseCosts[0], n = baseCosts.length, m = toppingCosts.length
  const { abs } = Math
  for (let i = 0; i < n; i++) {
    helper(0, baseCosts[i])
  }
  return res
  function helper(i, cur) {
    if(
      abs(cur - target) < abs(res - target)
      || (abs(cur - target) === abs(res - target) && cur < res)
    ) {
      res = cur
    }
    if(i === m || cur > target) return
    helper(i + 1, cur)
    helper(i + 1, cur + toppingCosts[i])
    helper(i + 1, cur + toppingCosts[i] * 2)
  }
};

