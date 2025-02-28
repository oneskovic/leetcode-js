/**

Given a sorted array of integers nums and integer values a, b and c.
Apply a quadratic function of the form f(x) = ax2 + bx + c to each element x in the array.

The returned array must be in sorted order.

Expected time complexity: O(n)

Example 1:

Input: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
Output: [3,9,15,33]
Example 2:

Input: nums = [-4,-2,2,4], a = -1, b = 3, c = 5
Output: [-23,-5,1,7]

*/

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
const sortTransformedArray = function(nums, a, b, c) {
  const n = nums.length
  const sorted = new Array(n)
  let i = 0,
    j = n - 1
  let index = a >= 0 ? n - 1 : 0
  while (i <= j) {
    if (a >= 0) {
      sorted[index--] =
        quad(nums[i], a, b, c) >= quad(nums[j], a, b, c)
          ? quad(nums[i++], a, b, c)
          : quad(nums[j--], a, b, c)
    } else {
      sorted[index++] =
        quad(nums[i], a, b, c) >= quad(nums[j], a, b, c)
          ? quad(nums[j--], a, b, c)
          : quad(nums[i++], a, b, c)
    }
  }
  return sorted
}

function quad(x, a, b, c) {
  return a * x * x + b * x +c
}

