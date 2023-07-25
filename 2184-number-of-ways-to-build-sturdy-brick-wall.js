/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} bricks
 * @return {number}
 */
const buildWall = function (height, width, bricks) {
  const mod = 1e9 + 7
  const avail = []
  const bset = new Set(bricks)
  const m = width - 1, limit = 1 << m
  for(let mask = 0; mask < limit; mask++) {
    const idxArr = [-1]
    for(let j = 0; j < m; j++) {
      if((mask >> j) & 1) idxArr.push(j)
    }
    idxArr.push(m)
    let flag = true
    for(let j = 1, len = idxArr.length; j < len; j++) {
      if(!bset.has(idxArr[j] - idxArr[j - 1])) {
        flag = false
        break
      }
    }
    if(flag) avail.push(mask)
  }
  
  let res = 0
  if(height === 1) return avail.length
  const dp = Array.from({ length: height }, () => Array(limit).fill(0))
  for(const mask of avail) {
    dp[0][mask] = 1
  }
  
  for(let i = 1; i < height; i++) {
    for(let j = 0, len = avail.length; j < len; j++) {
      const cur = avail[j]
      for(let k = 0; k < len; k++) {
        const pre = avail[k]
        if((cur & pre) === 0) {
          dp[i][cur] = (dp[i][cur] + dp[i - 1][pre]) % mod
        }
      }
      if(i === height - 1) {
        res = (res + dp[i][cur]) % mod
      }
    }
  }
  
  return res
}

