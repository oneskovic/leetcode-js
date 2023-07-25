/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const distanceLimitedPathsExist = function (n, edgeList, queries) {
  edgeList.sort((a, b) => a[2] - b[2])
  const m = queries.length
  const res = Array(m).fill(false)
  const order = Array(m).fill(0)
  for (let i = 0; i < m; ++i) order[i] = i
  order.sort((i, j) => queries[i][2] - queries[j][2])
  const uf = new UF(n)
  let idx = 0
  for (let i of order) {
    const limit = queries[i][2]
    while (idx < edgeList.length && edgeList[idx][2] < limit) {
      const [u, v] = edgeList[idx]
      uf.union(u, v)
      idx++
    }
    const [u0, v0] = queries[i]
    if (uf.find(u0) === uf.find(v0)) res[i] = true
  }
  return res
}

class UF {
  constructor(n) {
    this.root = Array(n)
      .fill(null)
      .map((_, i) => i)
  }
  find(x) {
    if (this.root[x] !== x) {
      this.root[x] = this.find(this.root[x])
    }
    return this.root[x]
  }
  union(x, y) {
    const xr = this.find(x)
    const yr = this.find(y)
    this.root[yr] = xr
  }
}


