/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumber = function (cost, target) {
  const dp = new Array(target + 1).fill(-Infinity)
  dp[0] = 0
  for (let i = 1; i <= target; i++) {
    for (let c of cost) {
      if (i - c >= 0 && dp[i - c] >= 0) {
        dp[i] = Math.max(dp[i - c] + 1, dp[i])
      }
    }
  }
  let left = target
  let paint = ''
  if (dp[target] < 1) return '0'
  for (let i = cost.length - 1; i >= 0; i--) {
    while (left > 0 && dp[left - cost[i]] === dp[left] - 1) {
      paint += (i + 1).toString()
      left -= cost[i]
    }
  }
  return paint
}

