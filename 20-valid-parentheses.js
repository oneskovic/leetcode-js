/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
  const stack = []
  for(let c of s) {
    if(c === '(') stack.push(')')
    else if(c === '{') stack.push('}')
    else if(c === '[') stack.push(']')
    else if(stack.length === 0 || c !== stack.pop()) return false
  }
  return stack.length === 0
};


