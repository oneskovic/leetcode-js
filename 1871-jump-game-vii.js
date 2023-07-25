/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = function(s, minJump, maxJump) {
  const n = s.length
  const queue = [0]
  let mx = 0
  const { max, min } = Math
  while(queue.length) {
    const i = queue.shift()
    for(let j = max(i + minJump, mx + 1); j < min(s.length, i + maxJump + 1); j++) {
      if(s[j] === '0') {
        if(j === n - 1) return true
        queue.push(j)
      }
    }
    mx = i + maxJump
  }
  
  return false
};


