/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  const n = citations.length
  const arr = Array(n + 1).fill(0)
  for(let e of citations) {
    if(e >= n) arr[n]++
    else arr[e]++
  }
  for(let i = n, sum = 0; i >= 0; i--) {
    sum += arr[i]
    if(sum >= i) return i
  }
  return 0
};

