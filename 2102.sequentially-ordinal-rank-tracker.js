const maxFn = (a, b) => a.score === b.score ? a.name < b.name : a.score > b.score
const minFn = (a, b) => a.score === b.score ? a.name > b.name : a.score < b.score
const SORTracker = function() {
  this.maxPQ = new PQ(maxFn)
  this.minPQ = new PQ(minFn)
  this.idx = 0
};

/** 
 * @param {string} name 
 * @param {number} score
 * @return {void}
 */
SORTracker.prototype.add = function(name, score) {
  this.maxPQ.push({name, score})
};

/**
 * @return {string}
 */
SORTracker.prototype.get = function() {
  if(this.idx) {
    this.minPQ.push(this.maxPQ.pop())
    while(maxFn(this.maxPQ.peek(), this.minPQ.peek())) {
      const tmp = this.minPQ.pop()
      this.minPQ.push(this.maxPQ.pop())
      this.maxPQ.push(tmp)
    }
  }
  this.idx++
  return this.maxPQ.peek().name
};

/** 
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */

class PQ {
  constructor(comparator = (a, b) => a > b) {
    this.heap = []
    this.top = 0
    this.comparator = comparator
  }
  size() {
    return this.heap.length
  }
  isEmpty() {
    return this.size() === 0
  }
  peek() {
    return this.heap[this.top]
  }
  push(...values) {
    values.forEach((value) => {
      this.heap.push(value)
      this.siftUp()
    })
    return this.size()
  }
  pop() {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this.top) {
      this.swap(this.top, bottom)
    }
    this.heap.pop()
    this.siftDown()
    return poppedValue
  }
  replace(value) {
    const replacedValue = this.peek()
    this.heap[this.top] = value
    this.siftDown()
    return replacedValue
  }

  parent = (i) => ((i + 1) >>> 1) - 1
  left = (i) => (i << 1) + 1
  right = (i) => (i + 1) << 1
  greater = (i, j) => this.comparator(this.heap[i], this.heap[j])
  swap = (i, j) => ([this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]])
  siftUp = () => {
    let node = this.size() - 1
    while (node > this.top && this.greater(node, this.parent(node))) {
      this.swap(node, this.parent(node))
      node = this.parent(node)
    }
  }
  siftDown = () => {
    let node = this.top
    while (
      (this.left(node) < this.size() && this.greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this.greater(this.right(node), node))
    ) {
      let maxChild =
        this.right(node) < this.size() &&
        this.greater(this.right(node), this.left(node))
          ? this.right(node)
          : this.left(node)
      this.swap(node, maxChild)
      node = maxChild
    }
  }
}

