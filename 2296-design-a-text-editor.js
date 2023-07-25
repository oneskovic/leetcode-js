const TextEditor = function () {
  this.stk1 = []
  this.stk2 = []
}

/**
 * @param {string} text
 * @return {void}
 */
TextEditor.prototype.addText = function (text) {
  for (const ch of text) this.stk1.push(ch)
}

/**
 * @param {number} k
 * @return {number}
 */
TextEditor.prototype.deleteText = function (k) {
  let res = 0
  while (this.stk1.length && k) {
    k--
    res++
    this.stk1.pop()
  }
  return res
}

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorLeft = function (k) {
  let res = ''
  while (this.stk1.length && k) {
    const tmp = this.stk1.pop()
    this.stk2.push(tmp)
    k--
  }

  return this.slice()
}

/**
 * @param {number} k
 * @return {string}
 */
TextEditor.prototype.cursorRight = function (k) {
  let res = ''

  while (this.stk2.length && k) {
    const tmp = this.stk2.pop()
    this.stk1.push(tmp)
    k--
  }

  return this.slice()
}

TextEditor.prototype.slice = function() {
  let res = ''
  for (
    let len = this.stk1.length, size = Math.min(10, this.stk1.length), i = 0;
    i < size;
    i++
  ) {
    res = this.stk1[len - i - 1] + res
  }
  return res
}

