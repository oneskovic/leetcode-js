/**
 * @param {number} n
 * @return {string[]}
 */
const findStrobogrammatic = function(n) {
  return recursionHelper(n, n)
}
const recursionHelper = function(n, m) {
  if (n === 0) return ['']
  if (n === 1) return ['0', '1', '8']
  let rtnArr = recursionHelper(n - 2, m)
  let res = []
  for (let i = 0; i < rtnArr.length; i++) {
    if (n !== m) res.push('0' + rtnArr[i] + '0')
    res.push('1' + rtnArr[i] + '1')
    res.push('6' + rtnArr[i] + '9')
    res.push('8' + rtnArr[i] + '8')
    res.push('9' + rtnArr[i] + '6')
  }
  return res
}

