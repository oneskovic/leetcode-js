/**
 * @param {number} H
 * @param {character} W
 */
const Excel = function (H, W) {
  this.W = W.charCodeAt(0) - 'A'.charCodeAt(0) + 1
  this.H = H
  this.map = {}
  this.mat = []
  for (let i = 0; i < this.H; i++) {
    this.mat[i] = new Array(this.W).fill(0)
  }
  return
}

/**
 * @param {number} r
 * @param {character} c
 * @param {number} v
 * @return {void}
 */
Excel.prototype.set = function (r, c, v) {
  let row = r - 1
  let col = c.charCodeAt(0) - 'A'.charCodeAt(0)
  if (this.map[r + ':' + c]) delete this.map[r + ':' + c]
  this.mat[row][col] = v
}
/**
 * @param {number} r
 * @param {character} c
 * @return {number}
 */
Excel.prototype.get = function (r, c) {
  let row = r - 1
  let col = c.charCodeAt(0) - 'A'.charCodeAt(0)
  if (this.map[r + ':' + c] !== undefined)
    return this.sum(r, c, this.map[r + ':' + c])
  return this.mat[row][col]
}

/**
 * @param {number} r
 * @param {character} c
 * @param {string[]} strs
 * @return {number}
 */
Excel.prototype.sum = function (r, c, strs) {
  let sum = 0
  for (let str of strs) {
    if (str.indexOf(':') < 0) {
      sum += this.get(+str.substring(1), str[0])
    } else {
      let [r1, c1, r2, c2] = this.getRange(str.split(':'))
      for (let i = r1; i <= r2; i++) {
        for (let j = c1; j <= c2; j++) {
          sum += this.get(i + 1, String.fromCharCode(j + 'A'.charCodeAt(0)))
        }
      }
    }
  }
  this.map[r + ':' + c] = strs
  return sum
}

Excel.prototype.getRange = function (arr) {
  let p1 = arr[0],
    p2 = arr[1]
  let c1 = p1[0].charCodeAt(0) - 'A'.charCodeAt(0)
  let r1 = +p1.substring(1) - 1
  let c2 = p2[0].charCodeAt(0) - 'A'.charCodeAt(0)
  let r2 = +p2.substring(1) - 1
  return [r1, c1, r2, c2]
}

/**
 * Your Excel object will be instantiated and called as such:
 * var obj = Object.create(Excel).createNew(H, W)
 * obj.set(r,c,v)
 * var param_2 = obj.get(r,c)
 * var param_3 = obj.sum(r,c,strs)
 */


