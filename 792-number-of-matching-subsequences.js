/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = function(s, words) {
  const hash = {}
  for(let w of words) {
    if(hash[w[0]] == null) hash[w[0]] = []
    const it = w[Symbol.iterator]()
    hash[w[0]].push( it )
    it.next()
  }
  let res = 0
  for(let ch of s) {
    const advance = hash[ch] || []
    hash[ch] = []
    for(let it of advance) {
      const obj = it.next()
      if(obj.done === false) {
        if(hash[obj.value] == null) hash[obj.value] = []
        hash[obj.value].push(it)
      } else {
        res++
      }
    }
  }

  return res
};

