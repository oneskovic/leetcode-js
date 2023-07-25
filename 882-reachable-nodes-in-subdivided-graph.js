/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
const reachableNodes = function(edges, maxMoves, n) {
    let res = 0,
    heap = new Heap(),
    state = new Array(n).fill(0),
    graph = Array.from(new Array(n), () => []),
    distance = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let [u, v, d] of edges) {
    graph[u].push([v, d]);
    graph[v].push([u, d]);
  }
  distance[0] = 0;
  heap.insert([0, distance[0]]);
  while (heap.length != 0) {
    let t = heap.remove();
    if (state[t[0]] === 1) continue;
    if (distance[t[0]] <= maxMoves) res++;
    state[t[0]] = 1;
    for (let i of graph[t[0]]) {
      if (distance[i[0]] > distance[t[0]] + i[1] + 1) {
        distance[i[0]] = distance[t[0]] + i[1] + 1;
        heap.insert([i[0], distance[i[0]]]);
      }
    }
  }
  for (let [u, v, d] of edges) {
    let a = maxMoves - distance[u] >= 0 ? maxMoves - distance[u] : 0,
      b = maxMoves - distance[v] >= 0 ? maxMoves - distance[v] : 0;
    res += Math.min(d, a + b);
  }
  return res;
};

class Heap {
  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  compare(i, j) {
    if (!this.heap[j]) return false;
    return this.heap[i][1] > this.heap[j][1];
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(num) {
    this.heap.push(num);
    let idx = this.length - 1;
    let parent = (idx - 1) >> 1;
    while (idx !== 0 && this.compare(parent, idx)) {
      this.swap(parent, idx);
      idx = parent;
      parent = (idx - 1) >> 1;
    }
  }

  remove() {
    if (this.length === 1) return this.heap.pop();
    let res = this.heap[0],
      idx = 0,
      left = 1 | (idx << 1),
      right = (1 + idx) << 1;
    this.heap[0] = this.heap.pop();
    while (this.compare(idx, left) || this.compare(idx, right)) {
      if (this.compare(left, right)) {
        this.swap(idx, right);
        idx = right;
      } else {
        this.swap(idx, left);
        idx = left;
      }
      left = 1 | (idx << 1);
      right = (1 + idx) << 1;
    }
    return res;
  }
}

