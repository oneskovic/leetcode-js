/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
const maximalPathQuality = function(values, edges, maxTime) {
  const graph = {}, n = values.length
  for(const [u, v, t] of edges) {
    if(graph[u] == null) graph[u] = []
    if(graph[v] == null) graph[v] = []
    graph[u].push([v, t])
    graph[v].push([u, t])
  }
  let res = 0, visited = new Array(n).fill(0)
  visited[0] = 1
  bt(0, values[0], 0)
  return res

  function bt(i, val, time) {
    if(time > maxTime) return
    if(i === 0) res = Math.max(res, val)
    
    for(const [next, nextTime] of (graph[i] || [])) {
      const nextVal = visited[next] > 0 ? val : val + values[next]
      visited[next]++
      bt(next, nextVal, time + nextTime)
      visited[next]--
    }
  }
};

