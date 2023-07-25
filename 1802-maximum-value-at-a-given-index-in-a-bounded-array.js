/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function (n, index, maxSum) {
  maxSum -= n;
  let left = 0, right = maxSum, mid;
  while (left < right) {
    const mid = right - Math.floor((right - left) / 2);
    if (valid(mid))left = mid;
    else right = mid - 1;
  }
  return left + 1;
  
  function valid(mid) {
    let b = Math.max(mid - index, 0);
    let res = (mid + b) * (mid - b + 1) / 2;
    b = Math.max(mid - ((n - 1) - index), 0);
    res += (mid + b) * (mid - b + 1) / 2;
    return res - mid <= maxSum;
  }
}

