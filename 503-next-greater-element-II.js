/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function(nums) {
  const arr = []
  const n = nums.length
  const res = Array(n).fill(-1)
  nums.push(...nums)
  const stk = []
  for(let i = 0; i < 2 * n; i++) {
    const e = nums[i]
    while(stk.length && nums[stk.at(-1)] < e) {
      const idx = stk.pop()
      res[idx] = e
    }
    if(i < n) stk.push(i)
  }
  
  return res
};

