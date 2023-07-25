/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function(s) {
  const stk = []
  for (let e of s) {
    if(e === '[') stk.push(e)
    else {
      if(stk.length) {
        stk.pop()
      } else stk.push(e)
    }
  }
  return Math.ceil(stk.length / 2)
};

