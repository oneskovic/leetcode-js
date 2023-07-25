/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
const earliestFullBloom = function(plantTime, growTime) {
  const n = plantTime.length, arr = Array(n)
  for(let i = 0; i < n; i++) {
    arr.push([growTime[i], plantTime[i]])
  }
  arr.sort((a, b) => b[0] - a[0])
  
  let res = 0, cur = 0
  for(let i = 0; i < n; i++) {
    const e = arr[i]
    res = Math.max(res, cur + e[0] + e[1])
    cur += e[1]
  }
  
  return res
};

