/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
const minWindow = function (s1, s2) {
  const S = s1,T=s2
    let m = T.length, n = S.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j + 1;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (T.charAt(i - 1) == S.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    let start = 0, len = n + 1;
    for (let j = 1; j <= n; j++) {
        if (dp[m][j] != 0) {
            if (j - dp[m][j] + 1 < len) {
                start = dp[m][j] - 1;
                len = j - dp[m][j] + 1;
            }
        }
    }
    return len == n + 1 ? "" : S.substring(start, start + len);
}

