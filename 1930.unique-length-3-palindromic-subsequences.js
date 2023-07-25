/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = function(s) {
  const first = Array(26).fill(Infinity), last = Array(26).fill(0)
  let res = 0
  const n = s.length, a = 'a'.charCodeAt(0)
  for(let i = 0; i < n; i++) {
    const code = s[i].charCodeAt(0)
    first[code - a] = Math.min(i, first[code - a])
    last[code - a] = i
  }

  for(let i = 0; i < 26; i++) {
    if(last[i] - 1 > first[i]) {
      const tmp = s.slice(first[i] + 1, last[i])
      const set = new Set()
      for(let ch of tmp) set.add(ch)
      res += set.size
    }
  }

  return res
};

