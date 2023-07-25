/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
const minSessions = function(tasks, sessionTime) {
  const n = tasks.length
  const limit = 1 << n
  
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  for(let mask = 1; mask < limit; mask++) {
    for(let sub = mask; sub; sub = (sub - 1) & mask) {
      if(valid(sub)) {
        dp[mask] = Math.min(dp[mask], dp[mask - sub] + 1)        
      }
    }
  }
  
  return dp[limit - 1]
  
  function valid(sub) {
    let sum = 0
    for(let i = 0; i < 14; i++) {
      if((sub >> i) & 1) sum += tasks[i]
    }
    
    return sum <= sessionTime
  }
};

