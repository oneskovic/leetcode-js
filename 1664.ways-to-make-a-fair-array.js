/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = function(nums) {
  const n = nums.length, right = Array(2).fill(0), left = Array(2).fill(0)
  let res = 0
  for(let i = 0; i < n; i++) right[i % 2] += nums[i]
  for(let i = 0; i < n; i++) {
    right[i % 2] -= nums[i]
    if(left[0] + right[1] === left[1] + right[0]) res++
    left[i % 2] += nums[i]
  }
  return res
};

