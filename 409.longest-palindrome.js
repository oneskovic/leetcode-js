/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const set = new Set()
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i]
    if (set.has(currentChar)) {
      counter++
      set.delete(currentChar)
    } else {
      set.add(currentChar)
    }
  }
  counter *= 2
  if (set.size > 0) counter++
  return counter
}

