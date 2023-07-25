/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function(s) {
  let insert = 0, idx = 0, open = 0, len = s.length
  while(idx < len) {
    const ch = s[idx]
    if(ch === '(') {
      open++
      idx++
    } else {
      if(open > 0) {
        open--
      } else {
        insert++
      }
      if(idx < len - 1 && s[idx + 1] === ')') {
        idx += 2
      } else {
        insert++
        idx++
      }
    }
  }
  if(open) insert += open * 2
  return insert
};

