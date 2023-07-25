/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  let r = 0;
  for (let i = 0; i < 32; i++) {
    if (n & 1) {
      r = r | 1;
    } 
    if (i !== 31) {
       r = r << 1;
       n = n >> 1;
    }
  }
  return r >>> 0;
};

