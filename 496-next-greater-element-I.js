/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
  const map = new Map()
  const stk = []
  
  for(let i = 0, n = nums2.length; i < n; i++) {
    const e = nums2[i]
    while(stk.length && stk.at(-1) < e) {
      const tmp = stk.pop()
      map.set(tmp, e)
    }
    stk.push(e)
  }
  
  const res = []
  for(const e of nums1) {
    if(map.has(e)) {
      res.push(map.get(e))
    } else {
      res.push(-1)
    }
  }
  
  return res
};

