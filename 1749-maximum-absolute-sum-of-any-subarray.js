/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAbsoluteSum = function (nums) {
  let min = 0,
    max = 0,
    sum = 0
  for(let e of nums) {
    sum += e
    min = Math.min(sum, min)
    max = Math.max(sum, max)
  }
  return max - min
}

