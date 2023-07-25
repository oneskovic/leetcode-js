/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
const minimumJumps = function (forbidden, a, b, x) {
  const bad = new Set()
  const set = new Set()
  for (let i of forbidden) {
    bad.add(i)
  }
  let q = []
  q.push([0, 0, 0])
  set.add('0,0')
  while (q.length) {
    const tmp = []
    const size = q.length
    for(let i = 0; i < size; i++) {
      const [pos, level, state] = q[i]

      if (pos === x) return level
      if (state >= 0) {
        if (pos <= 4000 && !set.has(pos + a + ',0') && !bad.has(pos + a)) {
          set.add(pos + a + ',0')
          tmp.push([pos + a, level + 1, 0])
        }
        if (!set.has(pos - b + ',-1') && !bad.has(pos - b) && pos - b >= 0) {
          set.add(pos - b + ',-1')
          tmp.push([pos - b, level + 1, -1])
        }
      } else if (state < 0) {
        if (pos <= 4000 && !set.has(pos + a + ',0') && !bad.has(pos + a)) {
          set.add(pos + a + ',0')
          tmp.push([pos + a, level + 1, 0])
        }
      }      
    }

    q = tmp
  }
  return -1
}

