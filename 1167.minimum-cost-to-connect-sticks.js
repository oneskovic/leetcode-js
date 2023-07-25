/**

You have some sticks with positive integer lengths.

You can connect any two sticks of lengths X and Y into
one stick by paying a cost of X + Y.  You perform this action until there is one stick remaining.

Return the minimum cost of connecting all the given sticks into one stick in this way.

Example 1:

Input: sticks = [2,4,3]
Output: 14
Example 2:

Input: sticks = [1,8,3,5]
Output: 30
 
Constraints:

1 <= sticks.length <= 10^4
1 <= sticks[i] <= 10^4

*/

/**
 * @param {number[]} sticks
 * @return {number}
 */
const connectSticks = function(sticks) {
  if (sticks.length < 1) return 0
  let size = sticks.length - 1
  let i = Math.floor(sticks.length / 2)
  for (; i >= 0; i--) {
    heapify(sticks, i, size)
  }
  let cost = 0
  while (size >= 1) {
    const temp = sticks[0]
    sticks[0] = sticks[size--]
    heapify(sticks, 0, size)
    sticks[0] = sticks[0] + temp
    cost += sticks[0]
    heapify(sticks, 0, size)
  }
  return cost
}
const heapify = (arr, index, size) => {
  let smallest = index
  let l = index * 2 + 1
  let r = index * 2 + 2
  if (l <= size && arr[l] < arr[smallest]) {
    smallest = l
  }
  if (r <= size && arr[r] < arr[smallest]) {
    smallest = r
  }
  if (smallest != index) {
    swap(arr, index, smallest)
    heapify(arr, smallest, size)
  }
}
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

