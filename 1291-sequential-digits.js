/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = function(low, high) {
  const res = []
  
  let q = []
  for(let i = 1; i <= 9; i++) q.push(i)
  
  while(q.length) {
    const tmp = []
    const size = q.length
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      if(cur >= low && cur <= high) {
        res.push(cur)
      }
      if(cur > high) break
      const last = cur % 10
      if(last === 9) continue
      tmp.push(cur * 10 + last + 1)
    }
    
    q = tmp
  }
  
  return res
};

