/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const len = tasks.length
  const cnt = Array(26).fill(0)

  const A = 'A'.charCodeAt(0)
  let maxFreq = 0,
    maxFreqCnt = 0
  for (const ch of tasks) {
    const idx = ch.charCodeAt(0) - A
    cnt[idx]++
    if (maxFreq === cnt[idx]) {
      maxFreqCnt++
    } else if (maxFreq < cnt[idx]) {
      maxFreqCnt = 1
      maxFreq = cnt[idx]
    }
  }

  const slot = maxFreq - 1
  const numOfPerSlot = n - (maxFreqCnt - 1)
  const available = len - maxFreq * maxFreqCnt
  const idles = Math.max(0, slot * numOfPerSlot - available)
  return len + idles
}


