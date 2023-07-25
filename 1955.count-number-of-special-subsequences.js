/*
 * @lc app=leetcode id=1955 lang=javascript
 *
 * [1955] Count Number of Special Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const countSpecialSubsequences = function (nums) {
  const dp = Array(3).fill(0),
    mod = 10 ** 9 + 7
  for (let e of nums) {
    dp[e] = (((dp[e] + dp[e]) % mod) + (e > 0 ? dp[e - 1] : 1)) % mod
  }
  return dp[2]
}

