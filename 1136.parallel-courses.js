/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
const minimumSemesters = function (n, relations) {
  const inDegree = Array(n + 1).fill(0)
  const graph = {}
  for(const [prev, nxt] of relations) {
    if(graph[prev] == null) graph[prev] = []
    graph[prev].push(nxt)

    inDegree[nxt]++
  }

  let q = []
  for(let i = 1; i <= n; i++) {
    if(inDegree[i] === 0) q.push(i)
  }

// console.log(inDegree)
  let res = 0, cnt = 0
  while(q.length) {
    const size = q.length, nxt = []

    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(inDegree[e] === 0) {
          nxt.push(e)
        }
      }
    }
    res++
    cnt += size
    q = nxt
    // console.log(nxt)
  }
// console.log(cnt, res)

  return cnt === n ? res : -1
}


