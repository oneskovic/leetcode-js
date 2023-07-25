/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
const minimumTimeRequired = function(jobs, k) {
  const n = jobs.length
  const limit = 1 << n
  const sum = Array(limit).fill(0)
  const { min, max } = Math
  
  for(let mask = 0; mask < limit; mask++) {
    for(let i = 0; i < n; i++) {
      if((mask & (1 << i))) sum[mask] += jobs[i]
    }
  }
  
  const dp = Array.from({ length: k + 1 }, () => Array(limit).fill(0))
  for(let i = 0; i < limit; i++) dp[1][i] = sum[i]
  
  for(let i = 2; i <= k; i++) {
    for(let mask = 0; mask < limit; mask++) {
      dp[i][mask] = dp[i - 1][mask]
      for(let sub = mask; sub; sub = (sub - 1) & mask) {
        dp[i][mask] = min(dp[i][mask], max(dp[i - 1][mask - sub], sum[sub]))
      }
    }
  }
  
  return dp[k][limit - 1]
};

