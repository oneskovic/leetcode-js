/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
const minOperations = function(target, arr) {
  const hash = {}
  for (let i = 0, n = target.length; i < n; i++) {
    hash[target[i]] = i
  }
  const stk = []
  for(let e of arr) {
    if(hash[e] == null) continue
    let l = 0, r = stk.length
    while(l < r) {
      const mid = l + (~~((r - l) / 2))
      if(stk[mid] < hash[e]) l = mid + 1
      else r = mid
    }
    stk[l] = hash[e]
  }
  return target.length - stk.length
};

