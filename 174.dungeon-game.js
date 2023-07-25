/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function (dungeon) {
  const M = dungeon.length
  const N = dungeon[0].length
  // hp[i][j] represents the min hp needed at position (i, j)
  // Add dummy row and column at bottom and right side
  const hp = Array.from({ length: M + 1 }, () =>
    Array(N + 1).fill(Number.MAX_VALUE)
  )
  hp[M][N - 1] = 1
  hp[M - 1][N] = 1
  for (let i = M - 1; i >= 0; i--) {
    for (let j = N - 1; j >= 0; j--) {
      const need = Math.min(hp[i + 1][j], hp[i][j + 1]) - dungeon[i][j]
      hp[i][j] = need <= 0 ? 1 : need
    }
  }
  return hp[0][0]
}


