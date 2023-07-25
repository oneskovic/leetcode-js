/**
 * @param {number} n
 * @return {number}
 */
const minimumOneBitOperations = function (n) {
  let sign = 1,
    res = 0;
  while (n) {
    res += n ^ ((n - 1) * sign);
    n &= n - 1;
    sign = -sign;
  }
  return Math.abs(res);
};

