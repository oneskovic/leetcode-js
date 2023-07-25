/**
 * @param {number[][]} grid
 * @return {number}
 */
const countPaths = function (grid) {
  const mod = 1e9 + 7
  const m = grid.length, n = grid[0].length
  let res = 0
  const dirs = [[1,0], [-1,0], [0, 1], [0, -1]]
  const memo = Array.from({ length: m }, () => Array(n).fill(0))
  for(let i = 0; i <m ; i++) {
    for(let j = 0; j < n; j++) {
      res = (res + dfs(i, j)) % mod
    }
  } 
  return res
  
  function dfs(i, j) {
    let res = 1
    if(memo[i][j] !== 0) return memo[i][j]
    for(const [dx, dy] of dirs) {
      const nx = i + dx, ny = j + dy
      if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > grid[i][j]) {
        res = (res + dfs(nx, ny)) % mod
      }
    }
    
    memo[i][j] = res
    
    return res
  }
}

