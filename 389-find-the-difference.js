/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  let xor = 0
  for(let i = 0, len = s.length; i < len; i++) xor = xor ^ s.charCodeAt(i) ^ t.charCodeAt(i)
  xor = xor ^ t.charCodeAt(t.length - 1)
  return String.fromCharCode(xor)
};

