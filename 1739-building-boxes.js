/**
 * @param {number} n
 * @return {number}
 */
const minimumBoxes = function(n) {
  let i = 1, c = 1, s = 1
  while(s < n) {
    i += 1, c += i, s += c
  }
  while(s - i >= n) {
    s -= i, c -= 1, i -= 1
  }
  return c
};

