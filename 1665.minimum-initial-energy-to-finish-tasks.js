/**
 * @param {number[][]} tasks
 * @return {number}
 */
const minimumEffort = function (tasks) {
  tasks.sort((a, b) => a[1] - a[0] > b[1] - b[0] ? 1 : -1)
  let res = 0
  for(let e of tasks) {
    res = Math.max(res + e[0], e[1])
  }
  return res
}

