/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  const arr = new Array(n + 1).fill(0)
  arr[0] = arr[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[j - 1] * arr[i - j]
    }
  }
  return arr[n]
}

