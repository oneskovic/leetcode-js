/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
const minOperations = function (grid, x) {
  const arr = [],
    m = grid.length,
    n = grid[0].length
  const len = m * n
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr.push(grid[i][j])
    }
  }
  arr.sort((a, b) => a - b)
  const mid = arr[~~(len / 2)], { abs } = Math
  let res = 0
  for(const e of arr) {
    if(abs(mid - e) % x !== 0) return -1
    res += abs(mid - e) / x
  }

  return res
}

