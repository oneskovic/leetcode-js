/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
    if (n === 0) {
        return 0
    }
    let num = 1
    let sum = 1
    while(n >= sum + num + 1) {
        num += 1
        sum += num
    }

    return num
};

