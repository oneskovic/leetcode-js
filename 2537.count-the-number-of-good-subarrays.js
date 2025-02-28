/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countGood = function(nums, k) {
  let res = 0, total = 0
  const cnt = {}, n = nums.length

  for(let i = 0, j = 0; i < n; i++) {
    
    while(j < n && total < k) {
      total += diff(nums[j], 1)
      cnt[nums[j]] = (cnt[nums[j]] || 0) + 1
      j++
    }
    
    if(total >= k) {
      res += n - j + 1
    }
    total += diff(nums[i], -1)
    cnt[nums[i]]--
  }
  
  return res
  
  function diff(num, delta) {
    const pre = cnt[num] || 0
    const old = pre * (pre - 1) / 2
    const post = pre + delta
    const cur = post * (post - 1) / 2
    
    return cur - old
  }
};

