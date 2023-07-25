/**
 * @param {string} s
 * @return {number}
 */
const minimumTime = function(s) {
  const n = s.length
  const arr = []
  for(let ch of s) {
    arr.push(ch === '1' ? 1 : -1)
  }
  const score = minSum(arr)
  return n + score

  function minSum(ar) {
    const dp = Array(n).fill(Infinity)
    dp[0] = ar[0]
    let ans = dp[0]
    for(let i = 1; i < n; i++) {
      dp[i] = Math.min(ar[i], ar[i] + dp[i - 1])
      ans = Math.min(ans, dp[i])
    }
    return ans > 0 ? 0 : ans
  }
};

