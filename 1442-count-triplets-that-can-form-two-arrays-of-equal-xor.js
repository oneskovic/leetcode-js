
/**
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = function(arr) {
  let res = 0
  const n = arr.length
  for(let i = 0; i < n; i++) {
    let xor = arr[i]
    for(let j = i + 1; j < n; j++) {
      xor ^= arr[j]
      if(xor === 0) res += j - i
    }
  }
  
  return res
};

