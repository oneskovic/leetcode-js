/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let res = 1, cnt = 1
  for(let i = 1; i < s.length; i++) {
    if(s[i] === s[i - 1]) {
      if(++cnt > res) res = cnt
    } else {
      cnt = 1
    }
  }
  return res
};

