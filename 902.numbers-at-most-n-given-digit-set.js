/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
const atMostNGivenDigitSet = function(digits, n) {
  let res = 0
  const str = `${n}`, len = str.length
  const { pow } = Math, base = digits.length
  for(let i = 1; i < len; i++) {
    res += pow(base, i)
  }
  
  dfs(0)
  
  return res
  
  function dfs(pos) {
    if(pos === len) {
      res++
      return
    }
    for(const ch of digits) {
      if(str[pos] > ch) {
        res += pow(base, len - 1 - pos)
      } else if(str[pos] === ch) {
        dfs(pos + 1)
      } else break
    }
  }
};

