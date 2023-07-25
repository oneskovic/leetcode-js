/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
const minOperations = function (nums, numsDivide) {
  nums.sort((a, b) => a - b)
  let gcdVal = numsDivide[0]

  for(let i = 1, n = numsDivide.length; i < n; i++) {
    gcdVal = gcd(gcdVal, numsDivide[i])
  }

  for(let i = 0, n = nums.length; i < n && nums[i] <= gcdVal; i++) {
    if(gcdVal % nums[i] === 0) return i
  }

  return -1


  function gcd(a,b) {
    return b === 0 ? a : gcd(b, a % b)
  }
}

