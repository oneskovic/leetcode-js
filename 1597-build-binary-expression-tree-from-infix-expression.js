/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {Node}
 */
const expTree = function (s) {
  const n = s.length
  const head = new Node()
  let i = 0
  const number = () => {
    let num = ''
    while (i < n && '0' <= s[i]) {
      num += s[i++]
    }
    return new Node(Number(num))
  }
  const factor = () => {
    if (s[i] === '(') {
      i++
      const node = expression()
      i++
      return node
    }
    return number()
  }
  const term = () => {
    let left = factor()
    while (i < n && (s[i] === '*' || s[i] === '/')) {
      const op = new Node(s[i++])
      const right = factor()
      op.left = left
      op.right = right
      left = op
    }
    return left
  }
  const expression = () => {
    let left = term()
    while (i < s.length && (s[i] === '+' || s[i] === '-')) {
      const op = new Node(s[i++])
      const right = term()
      op.left = left
      op.right = right
      left = op
    }
    return left
  }
  return expression()
}


