/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumber = function (n, k) {
  let cur = 1
  k = k - 1
  while(k > 0) {
    const num = calc(cur)
    if(num <= k) {
      cur++
      k -= num
    } else {
      k--
      cur *= 10
    }
  }
  return cur
  
  function calc(cur) {
    let total = 0
    let nxt = cur + 1
    while(cur <= n) {
      total += Math.min(n - cur + 1, nxt - cur)
      nxt *= 10
      cur *= 10
    }
    
    return total
  }
}

