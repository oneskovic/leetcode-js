/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const res = [], n = nums.length
  nums.sort((a, b) => a - b)
  
  for(let i = 0; i < n; i++) {
    const target = -nums[i]
    let l = i + 1, r = n - 1
    while(l < r) {
      const sum = nums[l] + nums[r]
      if(sum > target) r--
      else if(sum < target) l++
      else {
        const e = [nums[i], nums[l], nums[r]]
        res.push(e)
        while(l + 1 < r && nums[l + 1] === nums[l]) l++
        while(r - 1 > l && nums[r - 1] === nums[r]) r--
        l++
        r--
      }
    }
    while(i + 1 < n && nums[i] === nums[i + 1]) i++
  }
  
  
  return res
};

