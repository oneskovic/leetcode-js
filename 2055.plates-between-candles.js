/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const platesBetweenCandles = function (s, queries) {
  const candleIdxArr = []
  const n = s.length
  for(let i = 0; i < n; i++) {
    if(s[i] === '|') candleIdxArr.push(i)
  }
  // console.log(candleIdxArr)
  const res = []
  for(const [s, e] of queries) {
    const l = lower(candleIdxArr, s, e)
    const r = upper(candleIdxArr, s ,e)
    const tmp = (candleIdxArr[r] - candleIdxArr[l] + 1) - (r - l + 1)
    res.push(tmp >= 0 ? tmp : 0)
  }

  return res


  function lower(arr,s,e) {
    let l = 0, r = arr.length - 1
    while(l < r) {
      // console.log('lower',l, r)
      const mid = ~~(l + (r - l)/2)
      if(arr[mid] < s) l = mid + 1
      else r = mid
    }
    return l
  }

  function upper(arr,s, e) {
    let l = 0, r = arr.length - 1
    while(l < r) {

      const mid = r - ~~((r - l)/2)
      // console.log('upper', l, r, mid, e)
      if(arr[mid] > e) r = mid - 1
      else l = mid
    }
    return l
  }
}

