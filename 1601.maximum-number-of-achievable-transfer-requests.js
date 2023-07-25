// O(n * 2 ^ r) 
// r: number of requests
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
const maximumRequests = function(n, requests) {
  const arr = Array(n).fill(0)
  let res = 0
  bt(requests, 0, arr, 0)
  return res
  function bt(r, idx, arr, num) {
    if(idx === r.length) {
      for(let i = 0; i < n; i++) {
        if(arr[i] !== 0) return
      }
      res = Math.max(res, num)
      return
    }
    const [from, to] = r[idx]
    arr[from]++
    arr[to]--
    bt(r, idx + 1, arr, num + 1)
    arr[from]--
    arr[to]++
    
    bt(r, idx + 1, arr, num)
  }
};


