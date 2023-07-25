/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const getAncestors = function(n, edges) {
  const res = Array.from({ length: n }, () => [])
  const graph = {}
  
  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = []
    graph[u].push(v)
  }
  
  for(let i = 0; i < n; i++) {
    dfs(i, i)
  }
  
  return res
  
  function dfs(p, cur) {
    for(const nxt of (graph[cur] || [])) {
      if(res[nxt].length === 0 || res[nxt][res[nxt].length - 1] !== p) {
        res[nxt].push(p)
        dfs(p, nxt)
      }
    }
  }
};

