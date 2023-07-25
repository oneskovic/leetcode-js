/**
 * @param {number[]} nums
 * @return {number}
 */
const longestNiceSubarray = function (nums) {
  let res = 1, i = 0, j = 0, mask = 0
  const n = nums.length
  for(i = 0; i < n; i++) {
    const cur = nums[i]
    while((cur & mask) !== 0) {
      mask ^= nums[j]
      j++
    }
    mask |= cur
    // console.log(i, j, mask, i - j +1)
    res = Math.max(res, i - j + 1)
  }
  
  return res
}

