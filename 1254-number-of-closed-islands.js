/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function(grid) {
  const m = grid.length, n = grid[0].length
  const dirs = [[0,1], [0,-1], [1,0], [-1,0]]
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if((i=== 0 || i === m - 1 || j === 0 || j === n - 1) && grid[i][j] === 0){
        fill(i, j)
      }
    }
  }

  
  let res = 0
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(grid[i][j] === 0) {
        res++
        fill(i, j)
      }    
    }
  }
  
  return res

  
  function fill(i, j) {
    if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 0) return
    grid[i][j] = 1
    for(const [dx, dy] of dirs) {
      const nx = i + dx, ny = j + dy
      fill(nx, ny)
    }
  }
};

