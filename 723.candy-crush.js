/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = function (board) {
  while (true) {
    let moreToCrush = false
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] > 0) {
          moreToCrush =
            flagForCrush(board, i, j, board[i][j], 0, true, false) ||
            moreToCrush
          moreToCrush =
            flagForCrush(board, i, j, board[i][j], 0, false, true) ||
            moreToCrush
        }
      }
    }
    if (!moreToCrush) break
    crush(board)
    inflictGravity(board)
  }
  return board
}
const flagForCrush = function (board, i, j, target, count, right, down) {
  if (
    j === board[0].length ||
    i === board.length ||
    Math.abs(board[i][j]) !== Math.abs(target)
  ) {
    return count >= 3
  }

  let shouldFlagIndexRight = flagForCrush(
    board,
    i,
    j + 1,
    target,
    right ? count + 1 : 1,
    true,
    false
  )
  let shouldFlagIndexDown = flagForCrush(
    board,
    i + 1,
    j,
    target,
    down ? count + 1 : 1,
    false,
    true
  )

  if ((shouldFlagIndexRight && right) || (shouldFlagIndexDown && down)) {
    board[i][j] = -Math.abs(board[i][j])
    return true
  }

  return false
}
const crush = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] < 0) board[i][j] = 0
    }
  }
}
const inflictGravity = function (board) {
  for (let j = 0; j < board[0].length; j++) {
    let st = board.length - 1
    let end = board.length - 2
    while (end >= 0) {
      if (board[st][j] === 0 && board[end][j] !== 0) {
        let temp = board[st][j]
        board[st][j] = board[end][j]
        board[end][j] = temp
        st--
      } else if (board[st][j] !== 0) {
        st--
      }
      end--
    }
  }
}

