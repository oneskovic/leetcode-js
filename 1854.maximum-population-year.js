/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = function(logs) {
  const n = logs.length
  const arr = Array(101).fill(0)
  const base = 1950
  for(let log of logs) {
    const [start, end] = log
    arr[start - base]++
    arr[end - base]--
  }
  
  let res = 0, tmp = -Infinity
  for(let i = 1; i < 101; i++) {
    arr[i] += arr[i - 1]
  }
  for(let i = 0; i < 101; i++) {
    if(arr[i] > tmp) {
      res = i
      tmp = arr[i]
    }
  }
  return res + base
};


