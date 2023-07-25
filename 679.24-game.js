/**
 * @param {number[]} nums
 * @return {boolean}
 */
const judgePoint24 = function(nums) {
  return dfs(nums)
}

function dfs(list) {
  let eps = 0.0001
  if (list.length === 1) {
    if (Math.abs(list[0] - 24) < eps) {
      return true
    }
    return false
  }
  let n = list.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const next = new Array(n - 1)
      for (let k = 0, index = 0; k < n; k++) {
        if (k !== i && k !== j) next[index++] = list[k]
      }
      let d1 = list[i],
        d2 = list[j]
      const dirs = [d1 + d2, d1 - d2, d2 - d1, d2 * d1]
      if (d1 > eps) dirs.push(d2 / d1)
      if (d2 > eps) dirs.push(d1 / d2)
      for (let dir of dirs) {
        next[n - 2] = dir
        if (dfs(next)) return true
      }
    }
  }
  return false
}


