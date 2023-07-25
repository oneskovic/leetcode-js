/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function(nums) {
  for(let i = 1, len = nums.length; i < len; i++) {
    if(nums[i] < nums[i - 1]) {
      return nums[i]
    }
  }
  return nums[0]
};

