/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function(nums, p) {
  const remain = nums.reduce((ac, e) => ac + e, 0) % p
  const n = nums.length, hash = {0: -1}
  let res = n
  if(remain === 0) return 0
  for(let i = 0, sum = 0; i < n; i++) {
    const cur = nums[i]
    sum += cur
    const target = (sum % p - remain + p) % p
    if(hash[target] != null) {
      res = Math.min(res, i - hash[target])
    }

    hash[sum % p] = i
  }
//   console.log(hash)
  
  return res === n ? -1 : res
};

