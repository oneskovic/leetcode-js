/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  const arr = Array(n).fill(0)
  
  for(let i = 2; i * i < n; i++) {
    if(arr[i] !== 0) continue
    let j = i * i
    while(j < n) {
      arr[j] = 1
      j += i
    }
  }
  
  let res = 0
  for(let i = 2; i < n; i++) {
    if(arr[i] === 0) res++
  }
  return res
};

