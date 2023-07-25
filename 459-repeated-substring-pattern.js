/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
  
  const len = s.length
  const table = build(s)
  return table[len] && (table[len] % (len - table[len]) === 0)
  
  function build(str) {
    const n = str.length
    const table = Array(n + 1).fill(0)
    let i = 1, j = 0
    table[0] = -1
    while(i < n) {
      if(str[i] === str[j]) {
        i++
        j++
        table[i] = j
      } else {
        if(j > 0) j = table[j]
        else i++
      }
    }
    
    return table
  }
};

