/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let left = 0, right = x;
  while (left < right) {
    let mid = right - ((right - left) >> 1);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

