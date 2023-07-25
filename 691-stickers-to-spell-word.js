/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
const minStickers = function (stickers, target) {
  const n = stickers.length
  const m = target.length
  const limit = 1 << m
  const dp = Array(limit).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i < limit; i++) {
    if (dp[i] === Infinity) continue
    for (const sticker of stickers) {
      let stat = i
      for (const ch of sticker) {
        for (let j = 0; j < m; j++) {
          if (target[j] === ch && ((stat >> j) & 1) === 0) {
            stat |= (1 << j)
            break
          }
        }
      }
      dp[stat] = Math.min(dp[stat], dp[i] + 1)
    }
  }

  return dp[limit - 1] === Infinity ? -1 : dp[limit - 1]
}


