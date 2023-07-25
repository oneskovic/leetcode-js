/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */ 
const findLexSmallestString = function(s, a, b) {
  let res = s
  const visited = new Set()
  dfs(s)
  return res
  
  function dfs(str) {
    if(isVisited(str)) return
    visit(str)
    dfs(add(str))
    dfs(rotate(str))
  }
  
  function isVisited(str) {
    return visited.has(str)
  }
  
  function visit(str) {
    if(str < res) res = str
    visited.add(str)
  }
  
  function add(str) {
    const arr = str.split('').map(e => +e)
    for(let i = 1; i < str.length; i += 2) {
      arr[i] = (arr[i] + a) % 10
    }
    return arr.join('')
  }
  
  function rotate(str) {
    const arr = str.split('')
    arr.reverse()
    let l = 0, r = b - 1
    while(l < r) {
      swap(arr, l++, r--)
    }
    l = b
    r = s.length - 1
    while(l < r) {
      swap(arr, l++, r--)
    }
    return arr.join('')
  }
  
  function swap(arr, i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
};

