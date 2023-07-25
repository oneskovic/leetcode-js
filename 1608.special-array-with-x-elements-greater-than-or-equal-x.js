/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
  let l = -1, r = 1001
  while(l <= r) {
    const mid = r - Math.floor((r - l) / 2)
    const tmp = valid(mid)
    if(tmp === mid) return mid
    else if(tmp > mid) l = mid + 1
    else r = mid - 1
  }
  return -1
  
  function valid(mid) {
    let res = 0
    for(let e of nums) {
      if(e >= mid) res++
    }
    return res
  }
};

