/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const shortestSubarray = function(nums, k) {
  const q = [], n = nums.length
  let res = Infinity, sum = 0
  const prefix = []
  for(let i = 0; i < n; i++) {
    sum += nums[i]
    prefix.push(sum)
    if(sum >= k) res = Math.min(res, i + 1)
  }

  for(let i = 0; i < n; i++) {
    while(q.length && prefix[i] <= prefix[q[q.length - 1]]) q.pop()
    while(q.length && prefix[i] - prefix[q[0]] >= k) {
      res = Math.min(res, i - q[0])
      q.shift()
    }

    q.push(i)
  }
  
  return res === Infinity ? -1 : res
};

