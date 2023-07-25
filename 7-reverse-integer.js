/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let res = 0, tail, newResult
  const low = -Math.pow(2, 31), high = Math.pow(2, 31)
  while(x !== 0) {
    tail = x % 10
    newResult = res * 10 + tail
    // if((newResult - tail) / 10 !== res) return 0
    if(newResult < low || newResult >= high) return 0
    res = newResult
    x = ~~(x / 10)
  }
  
  return res
};

