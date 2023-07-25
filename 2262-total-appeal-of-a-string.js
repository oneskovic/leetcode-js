/**
 * @param {string} s
 * @return {number}
 */
const appealSum = function (s) {
  const n = s.length, pos = Array(26).fill(-1)
  let res = 0
  const a = 'a'.charCodeAt(0)
  for(let i = 0; i < n; i++) {
    let tmp = n - i, idx = s.charCodeAt(i) - a
    if(pos[idx] !== -1) {
       tmp += (i - pos[idx] - 1) * (n - i)
    } else tmp += i * (n - i)
    res += tmp
    pos[idx] = i
  }
  
  return res
}


