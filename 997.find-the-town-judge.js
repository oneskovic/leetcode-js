/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(N, trust) {
  const arr = new Array(N + 1).fill(0)
  for(let [t, ted] of trust) {
    arr[t]--
    arr[ted]++
  }
  for(let i = 1; i <= N; i++) {
    if(arr[i] === N - 1) return i
  }
  return -1
};

