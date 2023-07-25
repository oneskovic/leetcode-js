/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const n = numCourses, m = prerequisites.length
  const graph = {}, inDegree = Array(n).fill(0)
  
  for(const [s, e] of prerequisites) {
    if(graph[s] == null) graph[s] = []
    inDegree[e]++
    graph[s].push(e)
  }
  
  let q = []
  
  for(let i = 0; i < n; i++) {
    if(inDegree[i] === 0) q.push(i)
  }
  
  const hash = {}

  while(q.length) {
    const size = q.length
    const nxt = []
    for(let i = 0; i < size; i++) {
      const cur = q[i]
      for(const e of (graph[cur] || [])) {
        inDegree[e]--
        if(hash[e] == null) hash[e] = new Set()
        hash[e].add(cur)
        for(const dep of (hash[cur] || [])) {
          hash[e].add(dep)
        }
      
        if(inDegree[e] === 0) {
          nxt.push(e)
        }
      }
    }
    
    q = nxt
  }
  
  const res = []
  for(const [p, e] of queries) {
    if(hash[e] && hash[e].has(p)) res.push(true)
    else res.push(false)
  }
  
  return res
}

