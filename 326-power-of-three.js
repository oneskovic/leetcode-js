/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  const maxInt = Math.pow(3,30)
  if(n < 0) {
    return false
  }
  return maxInt % n === 0
} 

