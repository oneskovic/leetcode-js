/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function(numCourses, prerequisites) {
  const graph = {}, inDegree = Array(numCourses).fill(0)
  for(const [s, e] of prerequisites) {
    inDegree[s]++
    if(graph[e] == null) graph[e] = []
    graph[e].push(s)
  }
  
  const res = []
  let q = []
  for(let i = 0; i < numCourses; i++) {
    if(inDegree[i] === 0) q.push(i)
  }
  
  while(q.length) {
    const nxt = []
    for(let i = 0; i < q.length; i++) {
      const cur = q[i]
      res.push(cur)
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(inDegree[e] === 0) nxt.push(e)
      }
    }
    q = nxt
  }
  
  return res.length === numCourses ? res : []
}

