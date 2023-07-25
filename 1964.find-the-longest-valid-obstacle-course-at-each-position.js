/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length, res = [], stk = []
  for (let i = 0; i < n; i++) {
    const cur = obstacles[i]
    let idx = chk(cur)
    if (idx === stk.length) {
      stk.push(cur)
    } else {
      stk[idx] = cur
    }
    res.push(++idx)
  }

  return res

  function chk(val) {
    let l = 0, r = stk.length
    while(l < r) {
      const mid = ~~((l + r) / 2)
      if(stk[mid] <= val) l = mid + 1
      else r = mid
    }
    return l
  }
};

