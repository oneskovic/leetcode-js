/**
 * @param {number[]} A
 * @return {boolean}
 */
const isIdealPermutation = function(A) {
  if(A.length === 1 || A.length === 2) return true
  let max = A[0]
  for(let i = 0, len = A.length; i < len - 2; i++) {
    max = Math.max(max, A[i])
    if(max > A[i + 2]) return false
  }
  return true;
};

