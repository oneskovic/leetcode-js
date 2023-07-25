/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minKBitFlips = function(nums, k) {
  let cur = 0, res = 0
  const n = nums.length
  for(let i = 0; i < n; i++) {
    if(i >= k && nums[i - k] === 2) cur--
    if(cur % 2 === nums[i]) {
      if(i + k > n) return -1
      nums[i] = 2
      cur++
      res++
    }
  }
  return res
};

