/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function(nums) {
  const n = nums.length, left = Array(n).fill(0), right = Array(n).fill(n - 1)
  const mod = BigInt(1e9 + 7)
  let res = 0n
  let stk = []
  for(let i = 0; i < n; i++) {
    while(stk.length && nums[stk[stk.length - 1]] >= nums[i]) {
      stk.pop()
    }
    left[i] = stk.length ? stk[stk.length - 1] + 1 : 0
    stk.push(i)
  }
  
  stk = []
  for(let i = n - 1; i >= 0; i--) {
    while(stk.length && nums[stk[stk.length - 1]] >= nums[i]) {
      stk.pop()
    }
    right[i] = stk.length ? stk[stk.length - 1] - 1 : n - 1
    stk.push(i)
  }
  
  const preSum = []
  for(let i = 0; i < n; i++) {
    preSum[i] = (i === 0 ? 0n : preSum[i - 1]) + BigInt(nums[i])
  }
  for(let i = 0; i < n; i++) {
    res = max(res, fn(nums[i], left[i], right[i]))
  }
  
  return res % mod
  
  function max(a, b) {
    return a > b ? a : b
  }
  function fn(v, l, r) {
    return BigInt(v) * (l === 0 ? preSum[r] : preSum[r] - preSum[l - 1])
  }
};

