/**
 * @param {character[][]} box
 * @return {character[][]}
 */
const rotateTheBox = function(box) {
  const m = box.length, n = box[0].length
  const res = Array.from({ length: n }, () => Array(m).fill('.'))
  for(let i = 0; i < m; i++) {
    for(let j = n - 1, pos = n - 1; j >= 0; j--) {
      if(box[i][j] === '.') continue
      if(box[i][j] === '#') {
        res[pos][m - 1 - i] = '#'
        pos--
      } else {
        res[j][m - 1 - i] = '*'
        pos = j - 1
      }
    }
  }
  return res
};

