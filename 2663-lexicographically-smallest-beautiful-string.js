/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const smallestBeautifulString = function(s, k) {
  const n = s.length
  const original = s
  const chars = s.split(''), a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0)
  const codeToCh = code => String.fromCharCode(code)
  let flag = false
  for(let i = n - 1; i >= 0; i--) {
    const code = chars[i].charCodeAt(0)
    for(let j = code + 1; j < a + k && j <= z; j++) {
      if(!valid(i, codeToCh(j))) continue
      chars[i] = codeToCh(j)
      for(let nxt = i + 1; nxt < n; nxt++) {
        for(let c = a; c < a + k; c++) {
          if(valid(nxt, codeToCh(c))) {
            chars[nxt] = codeToCh(c)
            break
          }
        }
      }
      flag = true
      break
    }
    if(flag) break
  }
  
  const res = chars.join('')
  if(res === original) return ''
  return res
  
  function valid(idx, ch) {
    if(idx >= 1 && ch === chars[idx - 1]) return false
    if(idx >= 2 && ch === chars[idx - 2]) return false
    return true
  }
};

