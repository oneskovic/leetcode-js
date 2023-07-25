/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const minOperations = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length
  if(m > n * 6 || n > m * 6) return -1
  let sum1 = sum(nums1), sum2 = sum(nums2)
  if(sum1 > sum2) return minOperations(nums2, nums1)

  const arr = Array(6).fill(0)
  nums1.forEach(e => arr[6 - e]++)
  nums2.forEach(e => arr[e - 1]++)

  let res = 0, i = 5
  while(sum1 < sum2) {
    while(arr[i] === 0) i--
    sum1 += i
    res++
    arr[i]--
  }

  return res
};

function sum(arr) {
  return arr.reduce((ac, e) => ac + e, 0)
}

