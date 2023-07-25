/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const digitsCount = function(d, low, high) {
  return countDigit(high, d) - countDigit(low - 1, d)
};
function countDigit(limit, d) {
  let res = 0
  const str = `${limit}`
  const len = str.length
  const { pow } = Math
  if(d === 0) {
    for(let i = 1; i < len; i++) {
      const pre = ~~(limit / pow(10, i))
      const post = pow(10, i - 1)
      res += (pre - 1) * post
      const e = +str[len - i]
      if(e > d) {
        res += post
      } else if(e === d) {
        res += (limit % post) + 1
      }
    }    
  } else {
    for(let i = 1; i <= len; i++) {
      const pre = ~~(limit / pow(10, i))
      const post = pow(10, i - 1)
      res += pre * post
      const e = +str[len - i]
      if(e > d) {
        res += post
      } else if(e === d) {
        res += (limit % post) + 1
      }
    }  
  }
  
  
  return res
}


