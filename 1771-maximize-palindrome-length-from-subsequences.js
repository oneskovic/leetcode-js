/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const longestPalindrome = function(word1, word2) {
  const str = word1 + word2
  const len = str.length, m = word1.length, n = word2.length
  const dp = LPS(str)
  let res = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(word1[i] !== word2[j]) continue
      res = Math.max(res, 2 + dp[i + 1][j + m - 1])
    }
  }
  return res
}

function LPS(str) {
  const n = str.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  for(let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1
    for(let j = i + 1; j < n; j++) {
      if(str[i] === str[j]) dp[i][j] = 2 + dp[i + 1][j - 1]
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
    }
  }
  return dp
}


