/**
 * @param {number} size
 */
const Bitset = function (size) {
  this.arr = Array.from({ length: 2 }, (el, idx) =>
    Array(size).fill(idx === 0 ? 0 : 1)
  )
  this.cur = 0
  this.cnt = 0
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function (idx) {
  if(this.arr[this.cur][idx] === 1) return
  this.arr[this.cur][idx] = 1
  this.arr[this.cur ^ 1][idx] = 0
  this.cnt++
}

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function (idx) {
  if(this.arr[this.cur][idx] === 0) return
  this.arr[this.cur][idx] = 0
  this.arr[this.cur ^ 1][idx] = 1
  this.cnt--
}

/**
 * @return {void}
 */
Bitset.prototype.flip = function () {
  this.cur ^= 1
  this.cnt = this.arr[this.cur].length - this.cnt
}

/**
 * @return {boolean}
 */
Bitset.prototype.all = function () {
  return this.cnt === this.arr[this.cur].length
}

/**
 * @return {boolean}
 */
Bitset.prototype.one = function () {
  return this.cnt > 0
}

/**
 * @return {number}
 */
Bitset.prototype.count = function () {
  return this.cnt
}

/**
 * @return {string}
 */
Bitset.prototype.toString = function () {
  return this.arr[this.cur].join('')
}

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */

