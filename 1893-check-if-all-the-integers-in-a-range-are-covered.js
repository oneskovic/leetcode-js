/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function(ranges, left, right) {
  const arr = Array(52).fill(0)
  for(let [s, e] of ranges) {
    arr[s]++
    arr[e + 1]--
  }
  for(let i = 1; i < 52; i++) {
    arr[i] += arr[i - 1]
  }
  for(let i = left; i <= right; i++) {
    if(arr[i] === 0) return false
  }
  
  return true
};

