/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  const stack = []
  for(let e of nums) {
    if(stack.length === 0 || e > stack[stack.length - 1]) {
      stack.push(e)
      continue
    }
    let l = 0, r = stack.length - 1, mid
    while(l < r) {
      const mid = l + ((r - l) >> 1)
      if(e > stack[mid]) l = mid + 1
      else r = mid
    }
    stack[l] = e
  }
  return stack.length
};

