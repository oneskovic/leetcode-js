/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function(nums) {
  const n = nums.length;
  if(n === 0 || n === 1) return nums
  let maxSize = 0;
  const dp = Array(n).fill(1)
  nums.sort((a, b) => a - b)
  for(let i = 1; i < n; i++) {
    for(let j = i - 1; j >= 0; j--) {
      if(nums[i] % nums[j] === 0) {
        const tmp = dp[j] + 1
        if(tmp > dp[i]) dp[i] = tmp         
      }
    }
    if(dp[i] > maxSize) maxSize = dp[i]
  }
  const res = []
  let pivot = 0
  for(let i = n - 1; i >= 0; i--) {
    if(dp[i] === maxSize && (pivot % nums[i] === 0)) {
      pivot = nums[i]
      maxSize--
      res.push(nums[i])
    }
  }
  
  return res
};

