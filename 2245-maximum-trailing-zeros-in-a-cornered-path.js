/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxTrailingZeros = function maxTrailingZeros(grid) {
  const m = grid.length
  const n = grid[0].length

  const factors = (num, k) => {
    let sum = 0
    while (!(num % k)) {
      num /= k
      sum += 1
    }

    return sum
  }

  const getRowPrefixSum = (k) => {
    const rowPrefixSum = []
    for (let i = 0; i < m; i++) {
      rowPrefixSum.push([factors(grid[i][0], k)])
      for (let j = 1; j < n; j++) {
        rowPrefixSum[i][j] = factors(grid[i][j], k) + rowPrefixSum[i][j - 1]
      }
    }

    return rowPrefixSum
  }

  const getColPrefixSum = (k) => {
    const colPrefixSum = [[factors(grid[0][0], k)]]
    for (let i = 1; i < m; i++) {
      colPrefixSum.push([factors(grid[i][0], k) + colPrefixSum[i - 1][0]])
    }

    for (let j = 1; j < n; j++) {
      colPrefixSum[0][j] = factors(grid[0][j], k)
      for (let i = 1; i < m; i++) {
        colPrefixSum[i][j] = factors(grid[i][j], k) + colPrefixSum[i - 1][j]
      }
    }

    return colPrefixSum
  }

  const twoRow = getRowPrefixSum(2)
  const fiveRow = getRowPrefixSum(5)
  const twoCol = getColPrefixSum(2)
  const fiveCol = getColPrefixSum(5)

  let max = 0

  // now check every cell in the whole grid
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const twoLeft = twoRow[i][j]
      const twoRight = twoRow[i][n - 1] - (j && twoRow[i][j - 1])
      const twoUp = i && twoCol[i - 1][j]
      const twoDown = twoCol[m - 1][j] - twoCol[i][j]

      const fiveLeft = fiveRow[i][j]
      const fiveRight = fiveRow[i][n - 1] - (j && fiveRow[i][j - 1])
      const fiveUp = i && fiveCol[i - 1][j]
      const fiveDown = fiveCol[m - 1][j] - fiveCol[i][j]

      const corneredPaths = [
        Math.min(twoLeft + twoUp, fiveLeft + fiveUp),
        Math.min(twoLeft + twoDown, fiveLeft + fiveDown),
        Math.min(twoRight + twoUp, fiveRight + fiveUp),
        Math.min(twoRight + twoDown, fiveRight + fiveDown),
      ]

      const trailingZeros = Math.max(...corneredPaths)

      if (trailingZeros > max) {
        max = trailingZeros
      }
    }
  }

  return max
}

