/**
 * @param {string} s
 * @return {boolean}
 */
const splitString = function(s) {
  return helper(s, null)
};

function helper(str, previous) {
  for(let i = 0, n = str.length; i < n; i++) {
    const tmp = +(str.slice(0, i + 1))
    if(previous == null) {
      if(helper(str.slice(i + 1), tmp)) return true
    } else if(previous - tmp === 1 && (i === n - 1 || helper(str.slice(i + 1), tmp))) return true
  }
  
  return false
}


