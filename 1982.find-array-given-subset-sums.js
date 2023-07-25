/**
 * @param {number} n
 * @param {number[]} sums
 * @return {number[]}
 */
const recoverArray = function(n, sums) {
  const res = []
  sums.sort((a, b)  => a - b)
  while(res.length < n) {
    const used = Array(sums.length).fill(false)
    const v0 = [], v1 = []
    let d = sums[1] - sums[0]
    for(let i = 0, j = 1; ;i++, j++) {
      while(i < sums.length && used[i]) i++
      if(i === sums.length) break
      while(j <= i || sums[j] !== sums[i] + d) j++
      v0.push(sums[i])
      v1.push(sums[j])
      used[i] = used[j] = true
    }
    
    if(bs(v0, 0)) {
      res.push(d)
      sums = v0
    }else {
      res.push(-d)
      sums = v1
    }
  }
  return res
};


function bs(arr, e) {
  let l = 0, r = arr.length - 1
  while(l < r) {
    const mid = ~~((l + r) / 2)
    if(arr[mid] < e) l = mid + 1
    else r = mid
  }
  
  return arr[l] === e
}

