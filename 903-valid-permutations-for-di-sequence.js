/**
 * @param {string} s
 * @return {number}
 */
const numPermsDISequence = function(s) {
  const mod = 1e9 + 7
  const n = s.length
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
  s = '#' + s
  dp[0][0] = 1
  for(let i = 1; i <= n; i++) {
    const ch = s[i]
    for(let j = 0; j <= i; j++) {
      if(ch === 'I') {
        for(let k = 0; k < j; k++) {
          dp[i][j] += dp[i - 1][k]
          dp[i][j] %= mod
        }
      } else {
        for(let k = j; k < i; k++) {
          dp[i][j] += dp[i - 1][k]
          dp[i][j] %= mod
        }
      }
    }
  }
  
  
  let res = 0
  
  for(let i = 0; i <= n; i++) {
    res = (res + dp[n][i]) % mod
  }
  
  return res
};


