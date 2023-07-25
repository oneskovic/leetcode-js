/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const assignBikes = function(workers, bikes) {
  const { abs, min } = Math
  const n = workers.length, m = bikes.length
  
  const limit = 1 << m
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  let res = Infinity
  for(let mask = 1; mask < limit; mask++) {
    if(bitCnt(mask) > n) continue
    for(let i = 0; i < m; i++) {
      if((mask >> i) & 1) {
        dp[mask] = min(
          dp[mask],
          dp[mask ^ (1 << i)] + distance(bitCnt(mask) - 1, i)
        )        
      }
    }
    if(bitCnt(mask) === n) {
      res = min(res, dp[mask])
    }
  }
  
  return res
  
  function bitCnt(num) {
    let res = 0
    while(num) {
      num = num & (num - 1)
      res++
    }
    
    return res
  }
  
  // worker, bike
  function distance(i, j) {
    return abs(workers[i][0] - bikes[j][0]) + abs(workers[i][1] - bikes[j][1])
  }
};

