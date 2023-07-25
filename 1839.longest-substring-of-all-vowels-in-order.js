/**
 * @param {string} word
 * @return {number}
 */
function longestBeautifulSubstring(word) {
  let res = 0, cur = 'a', cnt = 0
  const set = new Set()
  for(let ch of word) {
    if(ch < cur) {
      set.clear()
      cnt = 0
      cur = 'a'
      if(ch === cur) {
        cnt++
        set.add(cur)
      }
    } else {
      cnt++
      set.add(ch)
      cur = ch
      if(set.size === 5) res = Math.max(res, cnt)
    }
  }
  return res
}

