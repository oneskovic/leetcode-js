/**
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = function(points) {
  const m = points.length, n = points[0].length
  let prev = points[0].slice()
  for(let i = 1; i < m; i++) {
    const left = []
    left[0] = prev[0]
    // left to right
    for(let j = 1; j < n; j++) {
      left[j] = Math.max(prev[j], left[j - 1] - 1)
    }
    const right = []
    right[n - 1] = prev[n - 1]
    // right to left
    for(let j = n - 2; j >= 0; j--) {
      right[j] = Math.max(prev[j], right[j + 1] - 1)
    }

    const cur = []
    for(let j = 0; j < n; j++) {
      cur[j] = Math.max(left[j], right[j]) + points[i][j]
    }
    prev = cur
  }

  return Math.max(...prev)
};

