/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
  const n = boxes.length
  const res = Array(n).fill(0)
  let cum = 0, sum = 0
  for(let i = 0; i < n; i++) {
    res[i] += sum
    cum += +boxes[i]
    sum += cum
  }
  cum = 0, sum = 0
  for(let i = n - 1; i >= 0; i--) {
    res[i] += sum
    cum += +boxes[i]
    sum += cum
  }
  return res
};


