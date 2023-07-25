/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = function(n, roads) {
  const g = {}, visited = Array(n + 1).fill(0)
  let res = Infinity
  for(const [u, v, d] of roads) {
    if(g[u] == null) g[u] = []
    if(g[v] == null) g[v] = []
    
    g[u].push([v, d])
    g[v].push([u, d])
  }
  
  dfs(1)
  
  return res
  
  function dfs(node) {
    visited[node] = 1
    for(const [nxt, dis] of (g[node] || [])) {
      res = Math.min(res, dis)
      if(visited[nxt] === 0) {
        dfs(nxt)
      }
    }
  }
};

