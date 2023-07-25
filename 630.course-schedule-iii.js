/**
 * @param {number[][]} courses
 * @return {number}
 */
const scheduleCourse = function (courses) {
  const compare = (a, b) => a[0] === b[0] ? 0 : (a[0] > b[0] ? -1 : 1)
  const queue = new PriorityQueue({ compare })
  courses.sort((a, b) => a[1] - b[1])
  let time = 0
  for(let e of courses) {
    time += e[0]
    queue.enqueue(e)
    if(time > e[1]) {
      const tmp = queue.dequeue()
      time -= tmp[0]
    }
  }
  return queue.size()
}

