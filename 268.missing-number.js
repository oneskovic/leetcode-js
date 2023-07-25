/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const n = nums.length
  let xor =  0 ^ nums[0]
  for(let i = 1; i < n; i++) xor = xor ^ i ^ nums[i]
  return xor ^ n
};

