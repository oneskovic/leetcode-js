/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function(s) {
  const n = s.length
  let res = 0, oneCnt = 0
  for(const e of s) {
    if(e === '1') oneCnt++
    else {
      const stayZero = oneCnt
      const flipToOne = res + 1
      res = Math.min(stayZero, flipToOne)
    }
  }
  
  return res
};

