/**
 * @param {character[][]} seats
 * @return {number}
 */
const maxStudents = function(seats) {
  const m = seats.length, n = seats[0].length, limit = 1 << n
  const dp = Array.from({ length: m + 1}, () => Array(limit).fill(0))
  
  let res = 0
  for(let i = 1; i <= m; i++) {
    for(let mask = 0; mask < limit; mask++) {
      let valid = true
      for(let j = 0; j < n; j++) {
        if(seats[i - 1][j] === '#' && ((mask >> j) & 1) ) {
          valid = false
          break
        }
        if(j < n - 1 && ((mask >> j) & 1) && ((mask >> (j + 1)) & 1) ) {
          valid = false
          break
        }
      }
      
      if(!valid) {
        dp[i][mask] = -1
        continue
      }
      
      for(let pre = 0; pre < limit; pre++) {
        if(dp[i - 1][pre] === -1) continue
        if( (pre & (mask >> 1)) !== 0 || (pre & (mask << 1)) !== 0 ) continue
        dp[i][mask] = Math.max(dp[i][mask], dp[i - 1][pre])
      }
      
      dp[i][mask] += bitCnt(mask)
      
      res = Math.max(res, dp[i][mask])
    }
  }
  
  return res
  
  function bitCnt(num) {
    let res = 0
    while(num) {
      if(num & 1) res++
      num = num >> 1
    }
    
    return res
  }
};

