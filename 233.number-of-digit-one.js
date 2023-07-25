/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function(n) {
  let res = 0
  const str = `${n}`
  const len = str.length, { pow } = Math
  
  for(let i = 1; i <= len; i++) {
    const pre = ~~(n / pow(10, i))
    const remain = n % (pow(10, i - 1))
    const post = pow(10, i - 1)
    res += pre * post
    const e = +(str[len - i])
    if(e > 1) {
      res += pow(10, i - 1)
    } else if(e === 1) {
      res += remain + 1
    }
  }
  
  return res
};


