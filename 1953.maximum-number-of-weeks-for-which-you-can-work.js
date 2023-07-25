/**
 * @param {number[]} milestones
 * @return {number}
 */
const numberOfWeeks = function(milestones) {
  let max = -Infinity
  let res = 0, sum = 0
  for(const e of milestones) {
    max = Math.max(e, max)
    sum += e
  }
  
  return Math.min(sum, (sum - max) * 2 + 1)
};


