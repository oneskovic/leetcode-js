/**
 * @param {string} s
 * @return {number}
 */
const longestRepeatingSubstring = function(s) {
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    let pivot = Math.floor((left + right + 1) / 2);
    if (hasRepeat(s, pivot)) {
      left = pivot;
    } else {
      right = pivot - 1;
    }
  }
  return left;
};

const hasRepeat = (s, l) => {
  const strings = new Set();
  for (let i = 0; i < s.length - l + 1; i++) {
    const sub = s.substr(i, l);
    if (strings.has(sub)) {
      return true;
    }
    strings.add(sub);
  }
  return false;
}

