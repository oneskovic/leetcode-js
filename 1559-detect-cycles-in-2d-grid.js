/**
 * @param {character[][]} grid
 * @return {boolean}
 */
const containsCycle = function (grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  const rows = grid.length
  const cols = (grid[0] || []).length
  const vis = Array.from({ length: rows }, () => Array(cols).fill(false))
  let res = false
  const dfs = (i, j, prevR, prevC, char) => {
    vis[i][j] = true
    for (let d of dirs) {
      const r = i + d[0]
      const c = j + d[1]
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        if (!(r == prevR && c === prevC)) {
          if (grid[r][c] === char) {
            if (!vis[r][c]) {
              if (dfs(r, c, i, j, char)) return true
            } else {
              if (prevR !== -1 && prevC !== -1) return true
            }
          }
        }
      }
    }
    return false
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!vis[i][j]) {
        res |= dfs(i, j, -1, -1, grid[i][j])
      }
      if (res) return true
    }
  }
  return res
}

