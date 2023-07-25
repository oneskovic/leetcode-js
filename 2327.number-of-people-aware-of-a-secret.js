/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
const peopleAwareOfSecret = function(n, delay, forget) {
  const dp = Array(n + 1).fill(0)
  const mod = 1e9 + 7
  
  dp[1] = 1
  for(let i = 1; i <= n; i++) {
    for(let j = i + delay; j < i + forget; j++) {
      if(j > n) break
      dp[j] += dp[i]
      dp[j] %= mod
    }
  }

  let res = 0
  for(let i = n - forget + 1; i <= n; i++) {
    res = (dp[i] + res) % mod
  }
  
  return res
};

