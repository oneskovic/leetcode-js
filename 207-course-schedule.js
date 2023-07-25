/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const set = new Set()
  const indegree = Array(numCourses).fill(0)
  const graph = {}

  for (const [s, e] of prerequisites) {
    indegree[e]++
    if (graph[s] == null) graph[s] = []
    graph[s].push(e)
  }

  let q = []
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) q.push(i)
  }

  while (q.length) {
    const nxt = []
    for (let i = 0, size = q.length; i < size; i++) {
      const cur = q[i]
      set.add(cur)
      for (const e of graph[cur] || []) {
        indegree[e]--
        if (indegree[e] === 0 && !set.has(e)) {
          nxt.push(e)
        }
      }
    }

    q = nxt
  }

  return set.size === numCourses
}

