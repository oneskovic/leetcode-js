/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
const minSpeedOnTime = function(dist, hour) {
  let n = dist.length, l = 1, r = 1e7 + 1
  while(l < r) {
    const mid = l + ((r - l) >> 1)
    let time = 0
    for(let i = 0; i < n - 1; i++) time += Math.ceil(dist[i] / mid)
    time += dist[dist.length - 1] / mid
    if(time > hour) l = mid + 1
    else r = mid
  }
  return l > 1e7 ? -1 : l
};

