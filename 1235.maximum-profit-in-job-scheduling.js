/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length
  const items = Array(n)
  for(let i = 0;i < n; i++) items[i] = [startTime[i], endTime[i], profit[i]]
  items.sort((a, b) => a[1] - b[1])
  const dpEndTime = [0]
  const dpProfit = [0]
  for(const [s, e, p] of items) {
    const prevIdx = binarySearch(dpEndTime, 0, dpEndTime.length - 1, s)
    const curProfit = dpProfit[prevIdx] + p, maxProfit = dpProfit[dpProfit.length - 1]
    if(curProfit > maxProfit) {
      dpProfit.push(curProfit)
      dpEndTime.push(e)
    }
  }
  
  return dpProfit[dpProfit.length - 1]
}

function binarySearch(arr, l, r, x) {
  while (l < r) {
    const mid = r - ((r - l) >> 1)
    if (arr[mid] > x) r = mid - 1
    else l = mid
  }
  return l
}


