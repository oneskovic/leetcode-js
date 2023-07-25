
/**
 * @param {number[]} arr
 * @return {number}
 */
 const sumSubarrayMins = function (arr) {
  const n = arr.length
  const mod = 1e9 + 7, stk = []
  const left = Array(n), right = Array(n)
  for(let i = 0; i< n; i++) {
    left[i] = i + 1
    right[i] = n - i
  }
  let res = 0
  for(let i = 0; i < n; i++) {
    while(stk.length && arr[stk[stk.length - 1]] > arr[i]) {
      const idx = stk.pop()
      right[idx] = i - idx
    }
    if (stk.length) left[i] = i - stk[stk.length - 1]
    stk.push(i)
    
  }
  for(let i = 0; i < n; i++) {
    res = (res + arr[i] * left[i] * right[i]) % mod
  }
  
  return res
}
 
