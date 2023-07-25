/**
 * @param {number[][]} questions
 * @return {number}
 */
const mostPoints = function(questions) {
  const n = questions.length, dp = Array(n + 1).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    const [gain, p] = questions[i]
    dp[i] = Math.max(dp[i + 1], (dp[p + i + 1] || 0) + gain)
  }
  return dp[0]
};

