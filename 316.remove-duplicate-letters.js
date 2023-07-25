/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
  const last = {}
  for (let i = 0; i < s.length; i++) last[s.charAt(i)] = i
  const added = {}
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (added[char]) continue
    while (stack.length && char < stack[0] && last[stack[0]] > i) {
      added[stack[0]] = false
      stack.shift()
    }
    stack.unshift(char)
    added[char] = true
  }
  return stack.reverse().join('')
}

