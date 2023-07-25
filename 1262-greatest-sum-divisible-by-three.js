/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumDivThree = function (nums) {
  const n = nums.length
  let dp = [0, -Infinity, -Infinity]
  for (let i = n - 1; i >= 0; i--) {
    const nextDp = []
    for (let j = 0; j < 3; j++) {
      const nextRemain = nums[i] % 3
      nextDp[j] = Math.max(nums[i] + dp[(nextRemain + j) % 3], dp[j])
    }
    dp = nextDp
  }
  return dp[0]
}

