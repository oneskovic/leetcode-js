/**
 * @param {number[][]} mat
 * @return {number}
 */
const minFlips = function (mat) {
  let start = 0
  const m = mat.length, n = mat[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      start |= mat[i][j] << (i * n + j)
    }
  }
  let q = [start]
  const seen = new Set(), dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [0, 0]]

  for(let i = 0; q.length; i++) {
    const tmp = []
    for (let size = q.length; size > 0; size--) {
      const cur = q.pop()
      if(cur === 0) return i
      for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
          let next = cur
          for(const [dx, dy] of dirs) {
            const r = i + dx, c = j + dy
            if(r >= 0 && r < m && c >= 0 && c < n) {
              next ^= (1 << (r * n + c))
            }
          }
          if (!seen.has(next)) {
            seen.add(next)
            tmp.push(next)
          }
        }
      }
    }
    q = tmp
  }

  return -1
}

