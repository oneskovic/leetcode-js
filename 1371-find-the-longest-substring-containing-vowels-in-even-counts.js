/**
 * @param {string} s
 * @return {number}
 */
const findTheLongestSubstring = function(s) {
  const n = s.length
  let res = 0, mask = 0
  const map = new Map([[0, -1]])
  
  for(let i = 0; i < n; i++) {
    const ch = s[i]
    const idx = 'aeiou'.indexOf(ch)
    if(idx !== -1) {
      mask ^= (1 << idx)
    }
    if(map.has(mask)) {
      res = Math.max(res, i - map.get(mask))
    } else {
      map.set(mask, i)
    }
  }
  
  return res
};

