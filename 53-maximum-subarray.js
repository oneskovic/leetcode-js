/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let res = -1e9, sum = 0
  for(const e of nums) {
    sum += e
    res = Math.max(res, sum)
    if(sum < 0) sum = 0
  }
  return res
}

