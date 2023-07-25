/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function (s, x, y) {
  let sb = s.split('')
  if (x > y) {
    return remove(sb, 'ab', x) + remove(sb, 'ba', y)
  }
  return remove(sb, 'ba', y) + remove(sb, 'ab', x)
  function remove(sb, pattern, point) {
    let i = 0,
      res = 0
    for (let j = 0; j < sb.length; j++) {
      sb[i++] = sb[j]
      if (
        i > 1 &&
        sb[i - 2] == pattern.charAt(0) &&
        sb[i - 1] == pattern.charAt(1)
      ) {
        i -= 2
        res += point
      }
    }
    sb.splice(i)
    return res
  }
}

