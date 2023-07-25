/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function(nums) {
  let res = 0, mask = 0
  for(let i = 31; i >= 0; i--) {
    mask = mask | (1 << i)
    const set = new Set()
    for(let e of nums) set.add(e & mask)
    const tmp = res | (1 << i)
    for(let e of set) {
      if(set.has(e ^ tmp)) {
         res = tmp
         break
      }
    }
  }
  return res
};

