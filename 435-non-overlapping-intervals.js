/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function(intervals) {
  if(intervals == null || intervals.length === 0) return 0
  intervals.sort((a, b) => a[1] - b[1])
  let res = 1, end = intervals[0][1]
  const len = intervals.length
  for(let i = 1; i < len; i++) {
    if(intervals[i][0] >= end) {
      end = intervals[i][1]
      res++
    }
  }
  
  return len - res
};

