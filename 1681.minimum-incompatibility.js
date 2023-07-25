/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumIncompatibility = function(nums, k) {
  const n = nums.length
  const size = n / k
  const mod = 1e9 + 7
  if(size === 1) return 0
  const limit = 1 << n
  const dp = Array.from({ length: limit }, () => Array(16).fill(Infinity))
  for(let i = 0; i < n; i++) dp[1 << i][i] = 0
  
  for(let mask = 0; mask < limit; mask++) {
    for(let i = 0; i < n; i++) {
      if((mask & (1 << i)) === 0) continue
      for(let j = 0; j < n; j++) {
        if((mask & (1 << j))) continue
        const newMask = mask | (1 << j)
        if(bitCnt(mask) % size === 0) {
          dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i])
        } else if(nums[j] > nums[i]) {
          dp[newMask][j] = Math.min(dp[newMask][j], dp[mask][i] + nums[j] - nums[i])
        }
      }
    }
  }

  const candidate = Math.min(...dp.at(-1))
  
  return candidate === Infinity ? -1 : candidate
    
  function bitCnt(num) {
    let res = 0
    while(num) {
      if(num & 1) res++
      num = num >> 1
    }
    
    return res
  }
};

