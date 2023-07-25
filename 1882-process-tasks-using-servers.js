/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
const assignTasks = function(servers, tasks) {
  const avail = new PQ((a, b) => a[0] === b[0] ? a[1] < b[1] : a[0] < b[0])
  const busy = new PQ((a, b) => a[2] < b[2])
  const res = []
  const { max } = Math
  // init
  for(let i = 0, len = servers.length; i < len; i++) {
    avail.push([servers[i], i, 0])
  }
  
  for(let i = 0, len = tasks.length; i < len; i++) {
    while(!busy.isEmpty() && busy.peek()[2] <= i) {
      const s = busy.pop()
      s[2] = i
      avail.push(s)
    }
    if(!avail.isEmpty()) {
      const s = avail.pop()
      res.push(s[1])
      busy.push([s[0], s[1], max(i, s[2]) + tasks[i]])
    } else {
      const tmp = busy.peek()
      while(!busy.isEmpty() && busy.peek()[2] === tmp[2]) {
        avail.push(busy.pop())
      }
      const s = avail.pop()
      res.push(s[1])
      busy.push([s[0], s[1], max(i, s[2]) + tasks[i]])
    }
  }
  
  return res
};

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

