/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(a, b) {
  if(b === '') return 0
  if(a.length < b.length) return -1
  if(a.length === b.length) return a === b ? 0 : -1
  const m = a.length, n = b.length
  const fail = Array(n).fill(-1)
  // DFA
  for(let i = 1; i < n; i++) {
    let j = fail[i - 1]
    while(j !== -1 && b[j + 1] !== b[i]) {
      j = fail[j]      
    }
    if(b[j + 1] === b[i]) fail[i] = j + 1
  }
  let pos = -1
  for(let i = 0; i < m; i++) {
    while(pos !== -1 && a[i] !== b[pos + 1]) pos = fail[pos]
    if(a[i] === b[pos + 1]) {
      pos++
      if(pos === n - 1) return i - n + 1
    }
  }
  return -1
};

