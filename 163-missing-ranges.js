/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = function(nums, lower, upper) {
  const list = []
  for (let n of nums) {
    let justBelow = n - 1
    if (lower === justBelow) list.push(lower + '')
    else if (lower < justBelow) list.push(lower + '->' + justBelow)
    lower = n + 1
  }
  if (lower === upper) list.push(lower + '')
  else if (lower < upper) list.push(lower + '->' + upper)
  return list
}

