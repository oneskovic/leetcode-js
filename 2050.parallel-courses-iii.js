/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
const minimumTime = function (n, relations, time) {
  const inDegree = Array(n + 1).fill(0)
  const graph = {}, dist = Array(n + 1).fill(0)
  
  for(const [pre, nxt] of relations) {
    if(graph[pre] == null) graph[pre] = []
    graph[pre].push(nxt)
    inDegree[nxt]++
  }

  let q = []
  for(let i = 1;i <=n;i++) {
    if(inDegree[i]===0) {
      q.push(i)
      dist[i] = time[i - 1]
    }
  }
  while(q.length) {
    const size = q.length, nxt = []

    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        dist[e] = Math.max(dist[e], dist[cur] + time[e - 1])
        inDegree[e]--
        if(inDegree[e] === 0) {
          nxt.push(e)
        }
      }
    }

    q = nxt
  }

  return Math.max(...dist)
}

