/**
 * @param {number[][]} heights
 * @return {number}
 */
const minimumEffortPath = function(heights) {
  const m = heights.length, n = heights[0].length
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let l = 0, r = 1e6 - 1
  
  while(l < r) {
    const mid = ~~((l + r) / 2)
    // console.log(l, r, mid)
    if(valid(mid)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  
  return l
  
  function valid(limit) {
    const visited = Array.from({ length: m }, () => Array(n).fill(false))
    return dfs(0, 0, limit, visited)
  }
  
  function dfs(i, j, limit, visited) {
    if(i === m - 1 && j === n - 1) return true
    visited[i][j] = true
    for(const [dx, dy] of dirs) {
      const nx = i + dx, ny = j + dy
      if(nx < 0 || nx >= m || ny < 0 || ny >= n) continue
      if(visited[nx][ny]) continue
      if(Math.abs(heights[i][j] - heights[nx][ny]) > limit) continue
      if(dfs(nx, ny, limit, visited)) return true
    }
    // return false
  }

};

