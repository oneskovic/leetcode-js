/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  const graph = {}

  for(const [u, v] of edges) {
    if(graph[u] == null) graph[u] = new Set()
    if(graph[v] == null) graph[v] = new Set()
    graph[u].add(v)
    graph[v].add(u)
  }

  let q = []
  for(let i = 0; i < n; i++) {
    if(graph[i].size === 1) q.push(i)
  }

  while(n > 2) {
    const size = q.length, nxt = []
    n -= size
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        graph[e].delete(cur)
        if(graph[e].size === 1) nxt.push(e)
      }
    }

    q = nxt
  }

  return q
}

