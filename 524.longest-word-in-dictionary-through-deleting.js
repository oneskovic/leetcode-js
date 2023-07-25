/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 const findLongestWord = function(s, dictionary) {
  let res = ''
  for (const word of dictionary) {
    let j = 0
    for (let i = 0, len = s.length; i < len; i++) {
      if(word[j] === s[i]) j++
      if(j === word.length) {
        if(word.length > res.length) res = word
        else if(word.length === res.length && word < res) res = word
        break
      }
    }
  }
  return res
};

