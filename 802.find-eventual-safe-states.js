/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
  const ing = {},
    n = graph.length
  const outDegree = Array(n).fill(0)
  let q = []
  for (let i = 0; i < n; i++) {
    outDegree[i] = graph[i].length
    if (outDegree[i] === 0) {
      q.push(i)
    }
    for (const e of graph[i]) {
      if (ing[e] == null) ing[e] = []
      ing[e].push(i)
    }
  }

  for (const term of q) {
    for (const come of ing[term] || []) {
      outDegree[come]--
      if (outDegree[come] === 0) q.push(come)
    }
  }
  q.sort((a, b) => a - b)
  return q
}

