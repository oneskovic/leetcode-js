/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
  const m = grid.length, n = grid[0].length
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  const visited = new Set()
  let q = []
  let num = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 2) q.push([i, j]), visited.add(`${i},${j}`)
      if(grid[i][j] !== 0) num++
    }
  }
  let res = 0
  while(q.length) {
    const size = q.length
    const tmp = []
    for(let i = 0; i < size; i++) {
      const [x, y] = q[i]
      for(let [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy
        if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1 && !visited.has(`${nx},${ny}`)) {
          tmp.push([nx, ny])
          visited.add(`${nx},${ny}`)
        }
      }
    }
    q = tmp
    if(q.length) res++
  }
  return visited.size === num ? res : -1
};

