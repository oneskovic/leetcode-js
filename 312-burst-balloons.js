function maxCoins(arr) {
  const len = arr.length
  const nums = Array(len + 2).fill(0);
  let n = 1;
  for (const x of arr) if (x > 0) nums[n++] = x;
  nums[0] = nums[n++] = 1;

  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let k = 2; k < n; k++) {
    for (let left = 0; left < n - k; left++) {
      let right = left + k;
      for (let i = left + 1; i < right; i++) {
        dp[left][right] = Math.max(
          dp[left][right],
          nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right],
        );
      }
    }
  }

  return dp[0][n - 1];
}

