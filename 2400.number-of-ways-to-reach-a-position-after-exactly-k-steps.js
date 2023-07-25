const dp = Array.from({ length: 1000 + 1 }, () => Array(1000 + 1).fill(0))
const mod = 1e9 + 7
/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
const numberOfWays = function(startPos, endPos, k) {
    const { abs } = Math
    if (dp[1][1] == 0) {
        for (let k = 1; k <= 1000; ++k) {
            dp[k][k] = 1;
            for (let i = 0; i < k; ++i) {
                dp[k][i] = ((i === 0 ? dp[k - 1][1] : dp[k - 1][i - 1]) + dp[k - 1][i + 1]) % mod;                
            }
        }        
    }

    return dp[k][abs(startPos - endPos)];
};

