
/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
const canDistribute = function(nums, quantity) {
  const freq = new Map()
  for(const e of nums) {
    freq.set(e, (freq.get(e) || 0) + 1)
  }
  const cntArr = [...freq.values()]
  const n = cntArr.length, m = quantity.length, limit = 1 << m
  const dp = Array.from({ length: n + 1 }, () => Array(limit).fill(false))
  for(let i = 0; i < n; i++) {
    dp[i][0] = true
  }
  cntArr.unshift(0)
  const allMask = limit - 1
  
  for(let i = 1; i <= n; i++) {
    for(let mask = 1; mask <= allMask; mask++) {
      if(dp[i - 1][mask]) {
        dp[i][mask] = true
        continue
      }
      for(let subset = mask; subset > 0; subset = (subset - 1) & mask) {
        if(dp[i - 1][mask - subset] === false) continue
        if(canSatisfySubset(cntArr[i], subset)) {
          dp[i][mask] = true
          break
        }
      }
    }
  }
  
  return dp[n][allMask]
  
  function canSatisfySubset(cnt, subset) {
    let sum = 0
    for (let i = 0; i < m; i++) {
      if(subset & (1 << i)) {
        sum += quantity[i]
      }
    }
    return cnt >= sum
  }
};

