/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = function(nums) {
  if (nums == null || nums.length < 4) return false
  const sum = nums.reduce((ac, el) => ac + el, 0)
  if (sum % 4 !== 0) return false
  nums.sort((a, b) => b - a)
  return dfs(nums, new Array(4).fill(0), 0, sum / 4)
}

function dfs(nums, arr, idx, target) {
  if (idx === nums.length) {
    return true
  }
  for (let i = 0; i < 4; i++) {
    if (arr[i] + nums[idx] > target || (i > 0 && arr[i] === arr[i - 1]))
      continue
    arr[i] += nums[idx]
    if (dfs(nums, arr, idx + 1, target)) return true
    arr[i] -= nums[idx]
  }
  return false
}



