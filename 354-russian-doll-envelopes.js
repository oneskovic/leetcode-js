/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = function(envelopes) {
  const env = envelopes
  env.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  const stk = []
  for(const e of env) {
    if(stk.length === 0 || e[1] > stk[stk.length - 1][1]) {
      stk.push(e)
      continue
    }
    let l = 0, r = stk.length - 1
    while(l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if(stk[mid][1] < e[1]) l = mid + 1
      else r = mid
    }
    
    stk[l] = e
  }
  
  return stk.length
};

