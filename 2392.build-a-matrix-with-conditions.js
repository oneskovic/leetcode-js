/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
const buildMatrix = function (k, rowConditions, colConditions) {
  const res = Array.from({ length: k }, () => Array(k).fill(0))

  const row = khansAlgo(rowConditions, k)
  if (row.length != k) return []

  const col = khansAlgo(colConditions, k)
  if (col.length != k) return []

  const idx = Array(k + 1).fill(0)
  for (let j = 0; j < col.length; j++) {
    idx[col[j]] = j
  }
  for (let i = 0; i < k; i++) {
    res[i][idx[row[i]]] = row[i]
  }
  return res

  function khansAlgo(r, k) {
    const indegree = Array(k + 1).fill(0)
    const adj = Array.from({ length: k + 1 }, () => Array())

    for (let x of r) {
      indegree[x[1]]++
      adj[x[0]].push(x[1])
    }
    const row = []
    const q = []
    for (let i = 1; i <= k; i++) {
      if (indegree[i] == 0) {
        q.push(i)
      }
    }
    while (q.length) {
      let t = q.pop()

      row.push(t)
      for (let x of adj[t] || []) {
        indegree[x]--
        if (indegree[x] == 0) {
          q.push(x)
        }
      }
    }
    return row
  }
}



