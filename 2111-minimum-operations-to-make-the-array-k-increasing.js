/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const kIncreasing = function(arr, k) {
  let res = 0, matrix = Array.from({ length: k }, () => []), n = arr.length
  for(let i = 0; i < k; i++) {
    for(let j = i; j < n; j += k) {
      matrix[i].push(arr[j])
    }
  }

  for (let i = 0; i < k; i++) {
    res += matrix[i].length - nonDecreasing(matrix[i])
  }

  return res

  function bisect_right(ar, x, l = 0, r) {
    if(r == null) r = ar.length
    while(l < r) {
      const mid = ~~((l + r) / 2)
      if(ar[mid] <= x) l = mid + 1
      else r = mid
    }
    return l
  }

  function nonDecreasing(ar) {
    let stk = []
    for(let e of ar) {
      const idx = bisect_right(stk, e)
      if(idx === stk.length) stk.push(e)
      else stk[idx] = e
    }

    return stk.length
  }
};

