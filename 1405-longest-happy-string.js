/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  const arr = [['a', a], ['b', b], ['c', c]]
  
  let res = ''
  while(true) {
    arr.sort((a, b) => b[1] - a[1])
    if(res.length >= 2 && arr[0][0] === res[res.length - 1] && arr[0][0] === res[res.length - 2]) {
      if(arr[1][1] > 0) {
        res += arr[1][0]
        arr[1][1]--
      } else break
    } else {
      if(arr[0][1] > 0) {
        res += arr[0][0]
        arr[0][1]--
      } else break
    }
  }
  
  return res
};


