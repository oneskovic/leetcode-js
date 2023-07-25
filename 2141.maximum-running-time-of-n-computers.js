/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
const maxRunTime = function(n, batteries) {
  n = BigInt(n)
  batteries = batteries.map(e => BigInt(e))
  const sum = batteries.reduce((ac, e) => ac + e, 0n)
  let l = 0n, r = sum / n
  while(l < r) {
    const mid = r - (r - l) / 2n
    if(valid(mid)) l = mid
    else r = mid - 1n
  }
  
  return l
  
  function valid(mid) {
    let curSum = 0n, target = mid * n
    for(const e of batteries) {
      curSum += e > mid ? mid : e
      if(curSum >= target) return true
    }
    return false
  }
};


