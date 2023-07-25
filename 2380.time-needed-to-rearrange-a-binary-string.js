/**
 * @param {string} s
 * @return {number}
 */
const secondsToRemoveOccurrences = function(s) {
  let zeros = 0
  const n = s.length, { max } = Math
  let res = 0
  
  for(let i = 0; i < n; i++) {
    if(s[i] === '0') zeros++
    if(s[i] === '1' && zeros > 0) {
      res = max(res + 1, zeros)
    }
  }
  return res 
};

