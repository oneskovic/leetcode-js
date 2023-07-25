/**
 * @param {number} N
 * @return {number}
 */
const maxA = function (N) {
  const dp = [0, 1, 2, 3, 4, 5, 6]
  const recurse = function (n) {
    if (dp[n]) return dp[n]
    const max = Math.max(
      recurse(n - 3) * 2,
      recurse(n - 4) * 3,
      recurse(n - 5) * 4
    )
    return (dp[n] = max)
  }
  return recurse(N)
}

