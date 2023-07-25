/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  const res = [intervals[0]]
  for(let i = 1, n = intervals.length; i < n; i++) {
    const [s, e] = intervals[i]
    const pre = res[res.length - 1]
    if(s <= pre[1]) {
      pre[1] = Math.max(pre[1], e)
    } else {
      res.push(intervals[i])
    }
  }
  return res
};

