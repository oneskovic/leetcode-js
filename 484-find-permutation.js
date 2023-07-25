/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = function(s) {
    const n = s.length
    const res = Array(n + 1)
    res[n]  = n + 1
    for (let i = 0, len = n; i < len;) {
        let j = i;
        while (j < len && s.charAt(j) === 'D') {
            j++;
        }
        for (let k = j - i; k >= 0; k--, j--) {
            res[i++] = j + 1;
        }
    }
    return res;
};

