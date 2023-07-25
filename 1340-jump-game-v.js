/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
const maxJumps = function (arr, d, res = 1) {
  const dp = Array(1001).fill(0)
  for (let i = 0, len = arr.length; i < len; ++i)
    res = Math.max(res, dfs(arr, i, d))
  return res

  function dfs(arr, i, d, res = 1) {
    if (dp[i]) return dp[i]
    for (
      let j = i + 1;
      j <= Math.min(i + d, arr.length - 1) && arr[j] < arr[i];
      ++j
    )
      res = Math.max(res, 1 + dfs(arr, j, d))
    for (let j = i - 1; j >= Math.max(0, i - d) && arr[j] < arr[i]; --j)
      res = Math.max(res, 1 + dfs(arr, j, d))
    return (dp[i] = res)
  }
}


