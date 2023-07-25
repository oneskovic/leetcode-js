/**
 * @param {string} s
 * @return {number}
 */
const uniqueLetterString = function(s) {
  const n = s.length
  const arr = Array.from({ length: 26 }, () => Array(2).fill(-1))
  const A = 'A'.charCodeAt(0)
  let res = 0
  for(let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - A
    res += (i - arr[idx][1]) * (arr[idx][1] - arr[idx][0])
    arr[idx] = [arr[idx][1], i]
  }
  
  for(let i = 0; i < 26; i++) {
    res += (n - arr[i][1]) * (arr[i][1] - arr[i][0])
  }
  
  return res
};

