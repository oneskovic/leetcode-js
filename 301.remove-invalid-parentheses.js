/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function(s) {
  const res = []
  helper(s, 0, 0, ['(', ')'])
  return res

  function helper(str, lastI, lastJ, pair) {
    let openNum = 0, closeNum = 0
    for(let i = lastI; i < str.length; i++) {
      if(str[i] === pair[0]) openNum++
      if(str[i] === pair[1]) closeNum++
      if(closeNum > openNum) {
        for(let j = lastJ; j <= i; j++) {
          if(str[j] === pair[1] && (j === lastJ || str[j - 1] !== pair[1])) {
            helper(str.slice(0, j) + str.slice(j + 1), i, j, pair)
          }
        }
        return
      }
    }
    let rev = str.split('').reverse().join('')
    if(pair[0] === '(') {
      helper(rev, 0, 0, [')', '('])
    } else {
      res.push(rev)
    }
  }
};

