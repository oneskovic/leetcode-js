/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = function(nums, minK, maxK) {
  let res = 0, n = nums.length
  let minIdx = -1, maxIdx = -1

  for(let i = 0, j = 0; i < n; i++) {
    if(nums[i] < minK || nums[i] > maxK) {
      minIdx = -1
      maxIdx = -1
      j = i + 1
    }
    if(nums[i] === minK) minIdx = i
    if(nums[i] === maxK) maxIdx = i
    if(minIdx !== -1 && maxIdx !== -1) {
      res += Math.min(minIdx, maxIdx) - j + 1
    }
  }
  
  return res
};

