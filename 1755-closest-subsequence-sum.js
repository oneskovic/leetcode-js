/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const minAbsDifference = function (nums, goal) {
  let min = Math.abs(goal)
  if (!nums.length) return min
  const generateSums = (a) => {
    let sums = []
    for (let i = 0; i < a.length; i++) {
      const l = sums.length
      for (let j = 0; j < l; j++) {
        sums.push(sums[j] + a[i])
        min = Math.min(min, Math.abs(sums[j] + a[i] - goal))
        if (min === 0) return
      }
      sums.push(a[i])
      min = Math.min(min, Math.abs(a[i] - goal))
      if (min === 0) return
    }
    return sums
  }

  const n1 = nums.slice(0, Math.ceil(nums.length / 2))
  const n2 = nums.slice(Math.ceil(nums.length / 2), nums.length)
  const sums1 = generateSums(n1)
  if (min === 0) return min
  const sums2 = generateSums(n2)
  if (min === 0) return min

  sums2.sort((a, b) => a - b)
  for (let i = 0; i < sums1.length; i++) {
    if (min === 0) return min
    let l = 0
    let r = sums2.length
    let sum
    while (l < r) {
      const h = Math.floor((l + r) / 2)
      sum = sums1[i] + sums2[h]
      min = Math.min(min, Math.abs(sum - goal))
      if (min === 0) return min
      if (sum - goal < 0) {
        l = h + 1
      } else {
        r = h
      }
    }
  }
  return min
}


