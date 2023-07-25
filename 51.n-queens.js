/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  const res = []
  const chess = Array.from({length: n}, () => new Array(n).fill('.'))
  bt(res, chess, 0)
  return res
}

function bt(res, chess, row) {
  if(row === chess.length) {
    res.push(build(chess))
    return
  }
  for(let i = 0, num = chess[0].length; i < num; i++) {
    if(valid(chess, row, i)) {
      chess[row][i] = 'Q'
      bt(res, chess, row + 1)
      chess[row][i] = '.'
    }
  }
}

function valid(chess, row, col) {
  for(let i = row - 1; i >= 0; i--) {
    if(chess[i][col] === 'Q') return false
  }
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if(chess[i][j] === 'Q') return false
  }
  for(let i = row - 1, j = col + 1; i >= 0 && j < chess[0].length; i--, j++) {
    if(chess[i][j] === 'Q') return false
  }
  return true
}

function build(chess) {
  return chess.map(el => el.join(''))
}

