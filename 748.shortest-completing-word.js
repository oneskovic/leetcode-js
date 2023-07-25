/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  const letters = licensePlate
    .replace(/\d/g, '')
    .replace(/ /g, '')
    .toLowerCase()
    .split('')
  let matchingWords = words.filter(word => {
    let completingWord = true
    letters.forEach(letter => {
      let letterIndex = word.indexOf(letter)
      if (letterIndex > -1) {
        let re = new RegExp(letter)
        word = word.replace(re, '')
      } else {
        completingWord = false
      }
    })
    return completingWord
  })
  const wordLengths = matchingWords.map(word => word.length)
  return matchingWords[wordLengths.indexOf(Math.min.apply(Math, wordLengths))]
}

