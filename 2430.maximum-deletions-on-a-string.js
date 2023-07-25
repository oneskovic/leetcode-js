/**
 * @param {string} s
 * @return {number}
 */
const deleteString = function (s) {
  const dp = Array(4000).fill(0)
  const n = s.length
  return helper(0)
  
  function helper(i) {
    if(dp[i] === 0) {
      dp[i] = 1
      for(let len = 1; dp[i] <= n - i - len; len++) {
        if(s.slice(i, i + len) === s.slice(i + len, i + 2 * len)) {
          dp[i] = Math.max(dp[i], 1 + helper(i + len))          
        }
      }
    }
    return dp[i]
  }
}

