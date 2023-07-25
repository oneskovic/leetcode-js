/**
 * @param {number[][]} cost
 * @return {number}
 */
const connectTwoGroups = function(cost) {
  const m = cost.length, n = cost[0].length, { min } = Math
  const limit = 1 << n
  const dp = Array.from({ length: m + 1 }, () => Array(limit).fill(Infinity))
  const subCost = Array.from({ length: m + 1 }, () => Array(limit).fill(Infinity))
  
  for(let i = 0; i < m; i++) {
    for(let mask = 0; mask < limit; mask++) {
      let sum = 0
      for(let j = 0; j < n; j++) {
        if((mask >> j) & 1) {
          sum += cost[i][j]
        }
      }
      
      subCost[i][mask] = sum
    }
  }
  
  dp[0][0] = 0
  for(let i = 1; i <= m; i++) {
    for(let mask = 0; mask < limit; mask++) {
      for(let sub = mask; sub; sub = (sub - 1) & mask) {
        dp[i][mask] = min(
          dp[i][mask],
          dp[i - 1][mask - sub] + subCost[i - 1][sub]
        )
      }
      let tmp = Infinity
      for(let j = 0; j < n; j++) {
        tmp = min(tmp, cost[i - 1][j])
      }
      
      dp[i][mask] = min(dp[i][mask], dp[i - 1][mask] + tmp)
    }
  }
  // console.log(dp)
  return dp[m][limit - 1]
};

