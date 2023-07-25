/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function (a, b) {
  let res = ''

  while(a > 0 || b > 0) {
    if(endsWith(res, 'aa')) {
      res += 'b'
      b--
    } else if(endsWith(res, 'bb')) {
      res += 'a'
      a--
    } else if(a >= b) {
      res += 'a'
      a--
    } else {
      res += 'b'
      b--
    }
  }

  return res

  function endsWith(str, sub) {
    let i = str.length - 1, j = sub.length - 1
    for(; i >=0 && j >= 0;i--,j--) {
      if(str[i] !== sub[j]) return false
    }
    if(j >= 0) return false

    return true
  }
}

