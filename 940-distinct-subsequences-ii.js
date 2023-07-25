/**
 * @param {string} s
 * @return {number}
 */
const distinctSubseqII = function(s) {
  const n = s.length,
    dp = Array(26).fill(0),
    a = 'a'.charCodeAt(0),
    mod = 1e9 + 7
  let res = 0
  for(let ch of s) {
    const idx = ch.charCodeAt(0) - a
    let tmp = 0
    for(let i = 0; i < 26; i++) tmp = (tmp + dp[i]) % mod
    tmp = (tmp + 1) % mod
    dp[idx] = tmp
  }
  return dp.reduce((ac, e) => (ac + e) % mod, 0)
};

