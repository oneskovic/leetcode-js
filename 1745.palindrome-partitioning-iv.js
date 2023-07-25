/**
 * @param {string} s
 * @return {boolean}
 */
const checkPartitioning = function(s) {
  const map = manacher(s);
  return checkPartitioningDfs(map, s, 0);
};

function checkPartitioningDfs(map, word, i, path = []) {
  if (path.length > 3) return false;
  if (path.length == 3 && path.join('') == word) return true;
  let found = false;
  const length = map.get(i);
  path.push(word.substr(i, length));
  found = found || checkPartitioningDfs(map, word, i + length, path);
  path.pop();

  path.push(word.substr(i, 1));
  found = found || checkPartitioningDfs(map, word, i + 1, path);
  path.pop();
  
  return found;
}

function manacher(s) {
  const t = '^#' + s.split('').join('#') + '#$';
  let r = 0;
  let c = 0;
  let maxC = 0;
  const rad = new Array(t.length).fill(0);
  for (let i = 1; i < t.length - 1; ++i) {
    if (r > i) rad[i] = Math.min(rad[2 * c - i], r - i);
    while (t[i - rad[i] - 1] == t[i + rad[i] + 1]) rad[i]++;
    if (i + rad[i] > r) {
      c = i;
      r = i + rad[i];
    }
    if (rad[c] > rad[maxC]) maxC = c;
  }
  const ans = new Map();
  for (let i = 0; i < rad.length; ++i) {
    if (rad[i] > 0) {
      ans.set((i - rad[i] - 1) >>> 1, rad[i]);
    }
  }
  return ans;
}

