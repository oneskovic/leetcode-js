/**
 * @param {string} s
 * @return {number}
 */
const minimumDeletions = function(s) {
  let res = 0, b = 0
  for(const e of s) {
    if(e === 'b') b++
    else if(b > 0) {
      res++
      b--
    }
  }
  
  return res
};

