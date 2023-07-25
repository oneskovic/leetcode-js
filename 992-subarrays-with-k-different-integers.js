/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = function(nums, k) {
  return mostK(k) - mostK(k - 1)
  function mostK(limit) {
    const map = new Map()
    let i = 0, j = 0, res = 0
    const n = nums.length
    for(; j< n; j++) {
      const e = nums[j]
      map.set(e, (map.get(e) || 0) + 1)
      while(map.size > limit) {
        const tmp = nums[i]
        map.set(tmp, (map.get(tmp) || 0) - 1)
        if(map.get(tmp) === 0) map.delete(tmp)
        i++
      }
      res += j - i + 1
    }
    
    return res
  }
};

