/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function(nums) {
  const numsAndIndexes = nums.map((x, i) => [x, i])
  const output = [...new Array(nums.length)].map(_ => 0)
  mergeSort(numsAndIndexes, output)
  return output
}

function mergeSort(arr, output) {
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, middle), output),
    right = mergeSort(arr.slice(middle), output)
  const sorted = []
  let i = 0,
    j = 0
  while (i < left.length || j < right.length) {
    if (i >= left.length) {
      sorted.push(right[j])
      j++
    } else if (j >= right.length) {
      sorted.push(left[i])
      i++
    } else {
      if (left[i][0] > right[j][0]) {
        sorted.push(left[i])
        output[left[i][1]] += right.length - j
        i++
      } else {
        sorted.push(right[j])
        j++
      }
    }
  }

  return sorted
}

