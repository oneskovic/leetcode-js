/**
 * @param {number[]} heights
 * @param {number} V
 * @param {number} K
 * @return {number[]}
 */
const pourWater = function (heights, V, K) {
  if (!V) return heights
  let bottom = K
  //iterate through from k to find thee lowest bottom
  for (let i = K; i >= 0; i--) {
    if (heights[i] > heights[bottom]) break
    if (heights[i] < heights[bottom]) bottom = i
  }
  //if bottom is not k increase height of bottom
  //and run again but decrease water droplet V by one
  if (bottom !== K) {
    heights[bottom]++
    return pourWater(heights, V - 1, K)
  }
  for (let i = K + 1; i < heights.length; i++) {
    if (heights[i] > heights[bottom]) break
    if (heights[i] < heights[bottom]) bottom = i
  }
  heights[bottom]++
  return pourWater(heights, V - 1, K)
}

