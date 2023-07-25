var CountIntervals = function() {
  this.intervals = []
  this.ans = 0
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
CountIntervals.prototype.add = function(left, right) {
  let l = 0, r = this.intervals.length
  while (l < r) {
    const m = Math.floor((l + r) / 2)
    if (this.intervals[m][1] >= left) {
      r = m
    } else {
      l = m + 1
    }
  }
  
  let index = l
  while (index < this.intervals.length && this.intervals[index][0] <= right) {
    left = Math.min(left, this.intervals[index][0])
    right = Math.max(right, this.intervals[index][1])
    this.ans -= this.intervals[index][1] - this.intervals[index][0] + 1
    index += 1
  }
  this.ans += right - left + 1
  this.intervals.splice(l, index - l, [left, right])
};


/**
 * @return {number}
 */
CountIntervals.prototype.count = function() {
  return this.ans
};

