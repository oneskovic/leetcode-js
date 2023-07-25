/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const matrixRankTransform = function (matrix) {
  function find(UF, x) {
    if (x !== UF.get(x)) UF.set(x, find(UF, UF.get(x)))
    return UF.get(x)
  }
  function union(UF, x, y) {
    if (!UF.has(x)) UF.set(x, x)
    if (!UF.has(y)) UF.set(y, y)
    UF.set(find(UF, x), find(UF, y))
  }
  const m = matrix.length
  const n = matrix[0].length
  const UFs = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const v = matrix[i][j]
      if (!UFs.has(v)) UFs.set(v, new Map())
      union(UFs.get(v), i, ~j)
    }
  }
  const value2index = {}
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let v = matrix[i][j]
      if (!value2index.hasOwnProperty(v)) value2index[v] = new Map()
      const indexes = value2index[v]
      let f = find(UFs.get(v), i)
      if (!indexes.has(f)) indexes.set(f, [])
      indexes.get(f).push([i, j])
    }
  }
  const answer = Array.from({ length: m }, () => Array(n).fill(0))
  const rowMax = Array(m).fill(0), colMax = Array(n).fill(0)
  const keys = Object.keys(value2index)
  keys.sort((a, b) => a - b)
  for (let v of keys) {
    for (let points of value2index[v].values()) {
      let rank = 1
      for (let point of points) {
        rank = Math.max(rank, Math.max(rowMax[point[0]], colMax[point[1]]) + 1)
      }
      for (let point of points) {
        answer[point[0]][point[1]] = rank
        rowMax[point[0]] = Math.max(rowMax[point[0]], rank)
        colMax[point[1]] = Math.max(colMax[point[1]], rank)
      }
    }
  }
  return answer
}

