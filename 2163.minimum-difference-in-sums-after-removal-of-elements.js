/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDifference = function(nums) {
  const n = nums.length, len = n / 3
  const maxCompare = (p, c) => { return p === c ? 0 : (p > c ? -1 : 1)}
  const minCompare = (p, c) => { return p === c ? 0 : (p < c ? -1 : 1)}
  const maxHeap = new PriorityQueue({compare: maxCompare})
  const minHeap = new PriorityQueue({compare: minCompare})
  const pre = Array(n).fill(Infinity), suffix = Array(n).fill(-Infinity)
  for(let i = 0, sum = 0; i < 2 * len; i++) {
    const cur = nums[i]
    maxHeap.enqueue(cur)
    sum += cur
    if(maxHeap.size() > len) {
      const tmp = maxHeap.dequeue()
      sum -= tmp
    }
    if(maxHeap.size() === len) {
      pre[i] = sum 
    }
  }

  for(let i = n - 1, sum = 0; i >= len; i--) {
    const cur = nums[i]
    minHeap.enqueue(cur)
    sum += cur
    if(minHeap.size() > len) {
      const tmp = minHeap.dequeue()
      sum -= tmp
    }
    if(minHeap.size() === len) {
      suffix[i] = sum
    }
  }

  // console.log(pre, suffix)
  let res = Infinity
  for(let i = len - 1; i < n - len; i++) {
    res = Math.min(res, pre[i] - suffix[i + 1])
  }
  return res
};

