/**
 * @param {number[]} nums
 * @return {number}
 */
const continuousSubarrays = function(nums) {
  let res = 0
  let l = 0
  let r = 0
  const mq1 = [], mq2 = []
  for(let r = 0; r < nums.length; r++) {
    const e = nums[r]
    while(mq1.length && nums[mq1.at(-1)] < e) mq1.pop()
    mq1.push(r)
    while(mq2.length && nums[mq2.at(-1)] > e) mq2.pop()
    mq2.push(r)
    
    while(mq1.length && mq2.length && Math.abs(nums[mq1[0]] - nums[mq2[0]]) > 2) {
      if(mq1.length && mq1[0] <= l) mq1.shift()
      if(mq2.length && mq2[0] <= l) mq2.shift()
      l++
    }
    
    res += r - l + 1
  }
  return res
};


