/**
 * @param {number[]} heights
 * @return {number[]}
 */
const canSeePersonsCount = function(heights) {
  const res = []
  if(heights.length === 0) return res
  
  const n = heights.length
  const stk = []
  for(let i = n - 1; i >= 0; i--) {
    let del = 0
    while(stk.length && heights[i] > heights[stk[stk.length - 1]]) {
      stk.pop()
      del++
    }
    res.push(del + (stk.length ? 1 : 0))
    stk.push(i)
  }
  
  return res.reverse()
};

