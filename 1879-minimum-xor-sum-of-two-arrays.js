/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minimumXORSum = function (nums1, nums2) {
  const n = nums1.length
  const limit = 1 << n
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  for (let mask = 1; mask < limit; ++mask) {
    for (let i = 0; i < n; ++i) {
      if ((mask >> i) & 1) {
        dp[mask] = Math.min(
          dp[mask],
          dp[mask ^ (1 << i)] + (nums1[bitCnt(mask) - 1] ^ nums2[i])
        )
      }
    }
  }
  return dp[limit - 1]
}

function bitCnt(num) {
  let res = 0
  while (num) {
    res++
    num = num & (num - 1)
  }

  return res
}


