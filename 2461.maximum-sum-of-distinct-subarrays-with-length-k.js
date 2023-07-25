/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function (nums, k) {
  const map = new Map(), n = nums.length
  let i = 0, res = 0, sum = 0

  while(i < n && i < k) {
    const cur = nums[i]
    map.set(cur, (map.get(cur) || 0) + 1 )
    sum += cur
    i++
  }
  if(map.size === k) res = sum

  for(i = k; i < n; i++) {
    const cur = nums[i]
    map.set(cur, (map.get(cur) || 0) + 1)
    const pre = nums[i - k]
    map.set(pre, (map.get(pre) || 0) - 1)
    if(map.get(pre) === 0) map.delete(pre)

    sum += cur
    sum -= nums[i - k]

    if(map.size === k) res = Math.max(res, sum)
  }

  return res
}

