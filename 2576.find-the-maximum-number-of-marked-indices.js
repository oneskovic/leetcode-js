/**
 * @param {number[]} nums
 * @return {number}
 */
const maxNumOfMarkedIndices = function(nums) {
  let res = 0
  const n =  nums.length
  nums.sort((a, b) => a - b)
  for(let i = 0, j = n - Math.floor(n / 2); j < n; j++) {
    if(nums[i] * 2 <= nums[j]) {
      res += 2
      i++
    }
  }
  
  return res
};

