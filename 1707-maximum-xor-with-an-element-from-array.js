/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximizeXor = function (nums, queries) {
  nums.sort((a, b) => a - b)
  const numOfBits = 1 + Math.floor(Math.log2(nums[nums.length - 1]))
  const maxMask = (1 << numOfBits) - 1
  return queries.map(([x, m]) => query(x, m))
  function query(x, m) {
    if (m < nums[0]) return -1
    let l = 0,
      r = nums.length
    while (l < r) {
      let mid = l + ((r - l) >> 1)
      if (m < nums[mid])r = mid
      else l = mid + 1
    }
    r--
    l = 0
    let ans = x & ~maxMask
    for (let bit = numOfBits - 1; bit >= 0; bit--) {
      const mask = 1 << bit
      if (x & mask) {
        if ((nums[l] & mask) === 0) {
          ans |= 1 << bit
          r = search(l, r, mask) - 1
        }
      } else {
        if (nums[r] & mask) {
          ans |= 1 << bit
          l = search(l, r, mask)
        }
      }
    }
    return ans
  }
  function search(l, r, mask) {
    while (l <= r) {
      const m = l + ((r - l) >> 1)
      if ((nums[m] & mask) === 0) l = m + 1 
      else r = m - 1
    }
    return l
  }
}


