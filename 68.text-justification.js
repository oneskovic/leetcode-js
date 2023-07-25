/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  const res = []
  let curRow = []
  let numOfChars = 0
  
  for (let w of words) {
    if (numOfChars + w.length + curRow.length > maxWidth) {
      for(let i = 0; i < maxWidth - numOfChars; i++) {
        if(curRow.length === 1) {
          curRow[0] += ' '
        } else {
          curRow[i % (curRow.length - 1)] += ' '
        }
      }
      res.push(curRow.join(''))
      curRow = []
      numOfChars = 0
    }
    curRow.push(w)
    numOfChars += w.length
  }

  const numOfSpace = maxWidth - numOfChars - (curRow.length - 1)
  let tail = ''
  for(let i = 0; i < numOfSpace; i++) tail += ' '
  res.push(curRow.join(' ') + tail)

  return res
};

