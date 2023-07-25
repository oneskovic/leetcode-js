/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function(nums) {
  let res = 0, sum = 0
  const hash = {0: -1}, n = nums.length
  
  for(let i = 0; i < n; i++) {
      const cur = nums[i]
      sum += cur === 0 ? -1 : 1
      if(hash[sum] != null) {
          res = Math.max(res, i - hash[sum])
      } else {
          hash[sum] = i
      }
      
  }
  
  return res
};

