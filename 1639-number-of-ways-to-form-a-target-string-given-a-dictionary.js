/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
  const m = words[0].length, len = words.length
  const n = target.length, a = 'a'.charCodeAt(0)
  const mod = 10 ** 9 + 7
  const dp = Array(n).fill(0)
  for(let i = 0; i < m; i++) {
    const freq = Array(26).fill(0)
    for(let j = 0; j < len; j++) {
      freq[words[j].charCodeAt(i) - a]++
    }
    for(let j = Math.min(i, n - 1); j >= 0; j--) {
      const code = target[j].charCodeAt(0) - a
      if(freq[code] > 0) {
        dp[j] += (j === 0 ? freq[code] : dp[j - 1] * freq[code])
        dp[j] %= mod
      }
    }
  }
  return dp[n - 1]
}

