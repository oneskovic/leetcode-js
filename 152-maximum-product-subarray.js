/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
  let min = nums[0], max = nums[0], res = nums[0]
  for(let i = 1, n = nums.length; i < n; i++) {
    const e = nums[i]
    if(e < 0) [min, max] = [max, min]
    min = Math.min(e, min * e)
    max = Math.max(e, max * e)
    res = Math.max(res, max)
  }
  return res
};

