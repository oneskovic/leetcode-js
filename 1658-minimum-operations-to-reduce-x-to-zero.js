/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function(nums, x) {
  const sum = nums.reduce((ac, e) => ac + e, 0)
  const subArrSum = sum - x
  if(subArrSum === 0) return nums.length
  const n = nums.length, hash = {0: -1}
  let ac = 0, res = -1
  for(let i = 0; i < n; i++) {
    const cur = nums[i]
    ac += cur
    if(hash[ac - subArrSum] != null) {
      res = Math.max(res, i - hash[ac - subArrSum])
    }
    hash[ac] = i
  }
 
  return res === -1 ? -1 : n - res
};

