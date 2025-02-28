/**
 * @param {number[]} target
 * @return {number}
 */
const minNumberOperations = function(target) {
  let res = target[0]
  
  for(let i = 1; i < target.length; i++) {
    res += Math.max(0, target[i] - target[i - 1])
  }
  
  return res
}

