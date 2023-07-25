/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let res = ''
  for(let i = 0, len = s.length; i < len; i++) {
    let s1 = chk(s,i,i), s2 = chk(s,i,i+1)
    if(s1.length > res.length) res = s1
    if(s2.length > res.length) res = s2
  }
  return res
};

function chk(s, i, j) {
  for(; i>= 0 && j < s.length; i--, j++) {
    if(s[i] !== s[j]) break
  }
  return s.slice(i+1, j)
}

