/**
 * @param {number[][]} grid
 * @return {number}
 */
function minCost(grid) {
  const m = grid.length, n = grid[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]] // right, left, down, up
  const dp = Array.from({ length: m }, () => Array(n).fill(Infinity))
  let q = [[0, 0]]
  dp[0][0] = 0
  while(q.length) {
    const tmp = []
    for(let idx = q.length - 1; idx >= 0; idx--) {
      const [r, c] = q[idx]
      for(let i = 0; i < dirs.length; i++) {
        const [dr, dc] = dirs[i]
        const nr = r + dr, nc = c + dc
        if(nr < 0 || nr >= m || nc < 0 || nc >= n) continue
        if(dp[nr][nc] > dp[r][c] + (i === grid[r][c] - 1 ? 0 : 1)) {
          dp[nr][nc] = dp[r][c] + (i === grid[r][c] - 1 ? 0 : 1)
          tmp.push([nr, nc])
        }
      }
    }
    q = tmp
  }

  return dp[m - 1][n - 1]
}

