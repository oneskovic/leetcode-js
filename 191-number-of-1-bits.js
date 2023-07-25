/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  let res = 0
  while(n > 0) {
    if(n & 1) res++
    n = n >>> 1
  }
  return res
};

