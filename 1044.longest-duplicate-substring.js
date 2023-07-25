/**
 * @param {string} s
 * @return {string}
 */
const longestDupSubstring = function(s) {
  const n = s.length
  let l = 0, r = n, res = ''
  while(l < r) {
    const mid = (l + r + 1) >> 1
    const [chk, str] = valid(s, mid)
    if(chk) {
      l = mid
      res = str
    } else {
      r = mid - 1
    }
  }
  return res
};

function valid(s, len) {
  const set = new Set()
  for(let i = 0, n = s.length; i <= n - len; i++) {
    const tmp = s.substr(i, len)
    if(set.has(tmp)) return [true, tmp]
    set.add(tmp)
  }
  
  return [false, '']
}

