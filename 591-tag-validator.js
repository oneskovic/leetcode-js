/**
 * @param {string} code
 * @return {boolean}
 */
const isValid = function (code) {
  const stack = []
  const [A, Z] = ['A', 'Z'].map((e) => e.charCodeAt(0))
  for (let i = 0; i < code.length; ) {
    if (i > 0 && stack.length === 0) return false
    if (code.startsWith('<![CDATA[', i)) {
      let j = i + 9
      i = code.indexOf(']]>', j)
      if (i < 0) return false
      i += 3
    } else if (code.startsWith('</', i)) {
      let j = i + 2
      i = code.indexOf('>', j)
      if (i < 0 || i === j || i - j > 9) return false
      for (let k = j; k < i; k++) {
        if (
          code.charAt(k) !== code[k].toUpperCase() ||
          !(code.charCodeAt(k) >= A && code.charCodeAt(k) <= Z)
        )
          return false
      }
      let s = code.slice(j, i++)
      if (stack.length === 0 || stack.pop() !== s) return false
    } else if (code.startsWith('<', i)) {
      let j = i + 1
      i = code.indexOf('>', j)
      if (i < 0 || i === j || i - j > 9) return false
      for (let k = j; k < i; k++) {
        if (
          code.charAt(k) !== code[k].toUpperCase() ||
          !(code.charCodeAt(k) >= A && code.charCodeAt(k) <= Z)
        )
          return false
      }
      let s = code.slice(j, i++)
      stack.push(s)
    } else {
      i++
    }
  }
  return stack.length === 0
}

