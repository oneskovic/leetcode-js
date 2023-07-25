/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const n = 9
  const m = 3
  const row = [],
    col = [],
    block = []
  for (let i = 0; i < n; i++) {
    row[i] = new Set()
    col[i] = new Set()
    block[i] = new Set()
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const ch = board[r][c]
      if (ch === '.') continue
      const b = Math.floor(r / m) * m + Math.floor(c / m)
      if (row[r].has(ch) || col[c].has(ch) || block[b].has(ch)) return false
      row[r].add(ch)
      col[c].add(ch)
      block[b].add(ch)
    }
  }
  return true
}

