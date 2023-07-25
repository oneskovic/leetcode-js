/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
const maxValue = function (events, k) {
  const n = events.length
  const memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(-1))
  events.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
  return helper(memo, events, n, 0, k)
}

function helper(memo, events, n, i, k) {
  if(i === n || k === 0) return 0
  if(memo[i][k] !== -1) return memo[i][k]
  let ni = i + 1
  for(; ni < n; ni++) {
    if(events[ni][0] > events[i][1]) break
  }

  return memo[i][k] = Math.max(
    helper(memo, events, n, i + 1, k),
    events[i][2] + helper(memo, events, n, ni, k - 1)
  )
}

