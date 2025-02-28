/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  if (arr.length === 1) return 0
  const n = arr.length
  const indexMap = new Map()
  for (let i = n - 1; i >= 0; i--) {
    if (!indexMap.has(arr[i])) {
      indexMap.set(arr[i], [])
    }
    indexMap.get(arr[i]).push(i)
  }
  let distance = 0
  const queue = [0, null]
  const visited = new Set([0])
  while (queue.length > 0) {
    const index = queue.shift()
    if (index !== null) {
      if (index > 0 && !visited.has(index - 1)) {
        visited.add(index - 1)
        queue.push(index - 1)
      }
      if (index < n - 1 && !visited.has(index + 1)) {
        if (index + 1 === n - 1) return distance + 1
        visited.add(index + 1)
        queue.push(index + 1)
      }
      for (const nb of indexMap.get(arr[index])) {
        if (!visited.has(nb) && nb !== index - 1 && nb !== index + 1) {
          if (nb === n - 1) return distance + 1
          visited.add(nb)
          queue.push(nb)
        }
      }
    } else {
      distance++
      if (queue.length > 0) {
        queue.push(null)
      }
    }
  }
  return -1
}

