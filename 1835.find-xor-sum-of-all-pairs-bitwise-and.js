/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const getXORSum = function(arr1, arr2) {
  let a = 0, b = 0
  for(const e of arr1) a ^= e
  for(const e of arr2) b ^= e
  
  return a & b
};


