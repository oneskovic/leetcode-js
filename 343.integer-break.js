/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function(n) {
  const dp = Array(n + 1).fill(0)
  dp[2] = 1
  for(let i = 3; i <= n; i++) {
    for(let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]))
    }
  }
  return dp[n]
};

