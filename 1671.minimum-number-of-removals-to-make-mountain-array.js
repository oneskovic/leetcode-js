/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumMountainRemovals = function(nums) {
  const inc = LIS(nums)
  const dec = LIS(nums.slice().reverse()).reverse()
  let res = 0
  for(let i = 0, len = nums.length; i < len; i++) {
    if(inc[i] > 1 && dec[i] > 1) res = Math.max(res, inc[i] + dec[i] - 1)
  }
  return nums.length - res
};

function LIS(arr) {
  const stack = []
  const res = []
  for(let e of arr) {
    if((stack.length && e > stack[stack.length - 1]) || stack.length === 0) {
      stack.push(e)
      res.push(stack.length)
      continue
    }
    let l = 0, r = stack.length - 1
    while(l < r) {
      const mid = l + ((r - l) >> 1)
      if(stack[mid] < e) l = mid + 1
      else r = mid
    }
    stack[l] = e
    res.push(stack.length)
  }
  
  return res
}

